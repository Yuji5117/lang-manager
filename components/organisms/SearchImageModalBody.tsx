import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import SearchImageForm from "../molecules/SearchImageForm";
import SearchImageResults from "../molecules/SearchImageResults";

interface PropsType {
  isActive: number;
  setImageUrl: any;
}

const SearchImageModalBody = ({ isActive, setImageUrl }: PropsType) => {
  const [photos, setPhotos] = useState<any>([]);
  let pageCount = 0;
  let tmpPhotos: any = [];

  const getPhotos = async (e: any) => {
    e.preventDefault();

    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page=${pageCount}&query=${e.target.value}&client_id=${process.env.NEXT_PUBLIC_API_UNSPLASH_KEY}`
    );

    tmpPhotos = tmpPhotos.concat(res.data.results);
    if (pageCount === 4 || pageCount === res.data.total_pages) {
      setPhotos(tmpPhotos);
    } else {
      pageCount++;
      await getPhotos(e);
    }
  };

  return (
    <Wrapper>
      {isActive === 1 && <p>upload</p>}
      {isActive === 2 && (
        <>
          <SearchImageForm getPhotos={getPhotos} />
          <ResultImageList>
            {photos.map((photo: any) => (
              <li key={photo.id}>
                <SearchImageResults
                  photo={photo}
                  setPhotos={setPhotos}
                  setImageUrl={setImageUrl}
                />
              </li>
            ))}
          </ResultImageList>
        </>
      )}
    </Wrapper>
  );
};

export default SearchImageModalBody;

const Wrapper = styled.div`
  height: 85%;
  width: 90%;
  margin: auto;
  overflow: scroll;
`;

const ResultImageList = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 5px;
`;
