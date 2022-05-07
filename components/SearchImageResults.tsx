import React from "react";

interface PropsType {
  photo: any;
}

const SearchImageResults = ({ photo }: PropsType) => {
  return (
    <>
      <a href={photo.links.html}>
        <img src={photo.urls.regular} alt={photo.alt_description} width="300" height="200" />
      </a>
    </>
  );
};

export default SearchImageResults;
