import React from "react";

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
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          width="300"
          height="200"
        />
      </button>
    </>
  );
};

export default SearchImageResults;
