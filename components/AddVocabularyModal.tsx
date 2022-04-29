import React from "react";
import styled from "styled-components";

import { useForm, Controller } from "react-hook-form";

import { TextField, Button } from "@mui/material";

interface IFormInputs {
  vocab: string;
  translatedVocab: string;
}

interface PropsType {
  addVocabulary(data: IFormInputs): void;
  handleModal(): void;
  imageUrl: any;
  setImageUrl: React.Dispatch<React.SetStateAction<any>>;
}

function AddVocabularyModal(props: PropsType) {
  const { handleSubmit, control } = useForm<IFormInputs>();

  const onHandleChange = (e: any) => {
    e.preventDefault();
    // const file = new FormData();
    // file.append("image", e.target.files[0]);
    // props.setImageUrl(file);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      props.setImageUrl(e.target?.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <ModalWrapper onClick={props.handleModal}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <Form>
          <Controller
            name="vocab"
            control={control}
            defaultValue=""
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
            defaultValue=""
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
          <ImageInput
            type="file"
            accept="image/*"
            name="imageUrl"
            onChange={onHandleChange}
          />
          <button>Serch images</button>
          <img src={props.imageUrl} width="300" />
          <ButtonWrapper>
            <Button variant="outlined" onClick={props.handleModal}>
              cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit(props.addVocabulary)}
            >
              Add
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    </ModalWrapper>
  );
}

export default AddVocabularyModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
