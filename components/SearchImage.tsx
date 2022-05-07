import axios from "axios";
import React, { useState } from "react";

import SearchImageForm from "./SearchImageForm";
import SearchImageResults from "./SearchImageResults";

interface PropsType {
  setImageUrl: React.Dispatch<React.SetStateAction<any>>;
}

const SearchImage = ({ setImageUrl }: PropsType) => {
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
    <>
      <SearchImageForm getPhotos={getPhotos} />
      <ul>
        一覧
        {photos.map((photo: any) => (
          <li key={photo.id}>
            <SearchImageResults
              photo={photo}
              setPhotos={setPhotos}
              setImageUrl={setImageUrl}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchImage;
