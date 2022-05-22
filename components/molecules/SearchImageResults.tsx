import React from "react";
import styled from "styled-components";

interface PropsType {
  vocabulary: any;
  photo: any;
  setImageUrl: any;
  setPhotos: any;
  editImage: any;
}

const SearchImageResults = ({ vocabulary, photo, editImage }: PropsType) => {
  return (
    <>
      <button onClick={(e) => editImage(vocabulary, photo.urls.regular)}>
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
