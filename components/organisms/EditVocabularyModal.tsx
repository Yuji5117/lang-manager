import styled from "styled-components";
import VocabularyForm from "../molecules/VocabularyForm";

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

function EditVocabularyModal(props: PropsType) {
  return (
    <ModalWrapper onClick={props.handleModal}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <VocabularyForm
          editVocabulary={props.editVocabulary}
          vocabulary={props.vocabulary}
          handleModal={props.handleModal}
        />
      </Modal>
    </ModalWrapper>
  );
}

export default EditVocabularyModal;

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
