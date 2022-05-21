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

  const getPhotos = async (e: any) => {
    e.preventDefault();

    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=${process.env.NEXT_PUBLIC_API_UNSPLASH_KEY}`
    );
    console.log(res.data.results);
    setPhotos(res.data.results);
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
  /* margin-left: auto;
  margin-right: auto; */
  /* height: 50px; */
`;

const ResultImageList = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 5px;
`;
