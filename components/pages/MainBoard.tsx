import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "../molecules/CardList";
import axios from "axios";

interface Vocabulary {
  id: number | null;
  word: string;
  translatedWord: string;
  image: string;
}

interface PropsType {
  filterValue: string;
}

function MainBoard({ filterValue }: PropsType) {
  const [langWords, setLangWords] = useState<Vocabulary[]>([]);

  useEffect(() => {
    fetchVocabularies();
  }, []);

  const fetchVocabularies = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/vocabularies`
    );

    res.data.sort((a: any, b: any) => {
      return b.id - a.id;
    });
    setLangWords(res.data);
  };

  const addVocabulary = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/vocabularies`, {
      id: null,
      word: "Word",
      translatedWord: "単語",
      image: "no_image.png",
    });
    fetchVocabularies();
  };

  const deleteVocabulary = async (id: number): Promise<void> => {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/vocabularies/${id}`
    );
    fetchVocabularies();
  };

  return (
    <Wrapper>
      <Container>
        <MainArea>
          <Form>
            <Button variant="contained" onClick={addVocabulary}>
              Add Vocabulary
            </Button>
          </Form>
          <CardListWrapper>
            <CardList
              langWords={langWords}
              deleteVocabulary={deleteVocabulary}
              fetchVocabularies={fetchVocabularies}
              filterValue={filterValue}
            />
          </CardListWrapper>
        </MainArea>
      </Container>
    </Wrapper>
  );
}

export default MainBoard;

const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
`;

const MainArea = styled.div``;

const Form = styled.div`
  margin-bottom: 30px;
`;

const CardListWrapper = styled.div`
  margin-bottom: 30px;
`;
