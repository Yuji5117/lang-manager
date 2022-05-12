import React, { useState } from "react";
import styled from "styled-components";

import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditVocabularyModal from "./EditVocabularyModal";
import axios from "axios";

interface Vocabulary {
  id: number | null;
  word: string;
  translatedWord: string;
  image: string;
}

interface PropsType {
  langWord: Vocabulary;
  deleteVocabulary(id: number | null): void;
  fetchVocabularies: () => void;
}

export interface UpdatedVocab {
  id: number;
  vocab: string;
  translatedVocab: string;
}

const VocabularyCard: React.FC<PropsType> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const editVocabulary = async (id: number, vocab: UpdatedVocab) => {
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/vocabularies/${id}`,
      {
        word: vocab.vocab,
        translatedWord: vocab.translatedVocab,
        image: "test.jpg",
      }
    );
    handleModal();
    props.fetchVocabularies();
  };

  return (
    <Wrapper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={`${props.langWord.image}`}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.langWord.word}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.langWord.translatedWord}
          </Typography>
        </CardContent>
        <IconButton
          name="delete"
          aria-label="delete"
          onClick={() => props.deleteVocabulary(props.langWord.id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton name="edit" aria-label="edit" onClick={handleModal}>
          <EditIcon />
        </IconButton>
      </Card>
      {openModal && (
        <EditVocabularyModal
          vocabulary={props.langWord}
          editVocabulary={editVocabulary}
          handleModal={handleModal}
        />
      )}
    </Wrapper>
  );
};

export default VocabularyCard;

const Wrapper = styled.div`
  cursor: pointer;
`;
