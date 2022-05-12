import React from "react";

interface PropsType {
  // 型を定義する
  getPhotos: (e: any) => void;
}

const SearchImageForm = ({ getPhotos }: PropsType) => {
  return (
    <>
      <form>
        <input type="text" placeholder="Search images" onChange={getPhotos} />
      </form>
    </>
  );
};

export default SearchImageForm;
