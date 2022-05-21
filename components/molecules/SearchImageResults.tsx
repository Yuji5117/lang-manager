import React from "react";
import styled from "styled-components";

interface PropsType {
  photo: any;
  setImageUrl: any;
  setPhotos: any;
}

const SearchImageResults = ({ photo, setImageUrl, setPhotos }: PropsType) => {
  const onHandleClick = (e: any, imageUrl: string) => {
    setImageUrl(imageUrl);
    setPhotos([]);
  };

  return (
    <>
      <button onClick={(e: any) => onHandleClick(e, photo.urls.regular)}>
        <Image
          src={photo.urls.regular}
          alt={photo.alt_description}
          width="120"
          height="65"
        />
      </button>
    </>
  );
};

export default SearchImageResults;

const Image = styled.img`
  object-fit: cover;
`;
