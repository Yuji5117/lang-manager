import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";

import { TextField, Button } from "@mui/material";

interface IFormInputs {
  vocab: string;
  translatedVocab: string;
}

interface Vocabulary {
  id: number | null;
  word: string;
  translatedWord: string;
  image: string;
}

interface PropsType {
  editVocabulary(id: number | null, data: IFormInputs): void;
  vocabulary: Vocabulary;
  handleModal(): void;
}

const VocabularyForm = (props: PropsType) => {
  const { handleSubmit, control } = useForm<IFormInputs>();
  return (
    <Form>
      <Controller
        name="vocab"
        control={control}
        defaultValue={props.vocabulary.word}
        render={({ field }) => (
          <TextField
            id="standard-basic"
            label="Vocab"
            variant="standard"
            {...field}
            margin="normal"
          />
        )}
      />
      <Controller
        name="translatedVocab"
        defaultValue={props.vocabulary.translatedWord}
        control={control}
        render={({ field }) => (
          <TextField
            id="standard-basic"
            label="Your Lang"
            variant="standard"
            {...field}
            margin="normal"
          />
        )}
      />
      <ImageInput type="file" />
      <ButtonWrapper>
        <Button variant="outlined" onClick={props.handleModal}>
          cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit((fields) =>
            props.editVocabulary(props.vocabulary.id, fields)
          )}
        >
          Update
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default VocabularyForm;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const ImageInput = styled.input`
  margin: 40px 0;
`;
