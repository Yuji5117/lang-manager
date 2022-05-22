import React, { useState } from "react";
import styled from "styled-components";
import SearchImageModalBody from "./SearchImageModalBody";
import SearchImageModalHeader from "./SearchImageModalHeader";

interface PropsType {
  vocabulary: any;
  setImageUrl: any;
  editImage: any;
  setOpenSearchImageModal: any;
}

const SearchImageModal = ({
  vocabulary,
  setImageUrl,
  editImage,
  setOpenSearchImageModal,
}: PropsType) => {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <ModalWrapper onClick={() => setOpenSearchImageModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <SearchImageModalHeader setIsActive={setIsActive} />
        <SearchImageModalBody
          vocabulary={vocabulary}
          editImage={editImage}
          isActive={isActive}
          setImageUrl={setImageUrl}
        />
      </Modal>
    </ModalWrapper>
  );
};

export default SearchImageModal;

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
  width: 560px;
  height: 80%;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;
