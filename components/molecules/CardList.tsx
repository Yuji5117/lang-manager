import VocabularyCard from "./VocabularyCard";

import Grid from "@mui/material/Grid";

interface Vocabulary {
  id: number | null;
  word: string;
  translatedWord: string;
  image: string;
}

interface PrposType {
  langWords: Vocabulary[];
  deleteVocabulary: (id: number) => void;
  fetchVocabularies: () => void;
  filterValue: string;
}

const CardList = ({
  langWords,
  deleteVocabulary,
  fetchVocabularies,
  filterValue,
}: PrposType) => {
  // if (props.langWords.length) {
  // const filterdCards: Vocabulary[] = props.langWords.filter(
  //   (langWord) =>
  //     !props.filterValue ||
  //     langWord.word.includes(props.filterValue) ||
  //     langWord.translatedWord.includes(props.filterValue)
  // );
  // }
  return (
    <Grid container spacing={4}>
      {langWords.map((langWord) => (
        <Grid item key={langWord.id}>
          <VocabularyCard
            langWord={langWord}
            deleteVocabulary={deleteVocabulary}
            fetchVocabularies={fetchVocabularies}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
