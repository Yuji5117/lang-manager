import axios from "axios";
import React, { useState } from "react";

import SearchImageForm from "./SearchImageForm";
import SearchImageResults from "./SearchImageResults";

const SearchImage = () => {
  const [photos, setPhotos] = useState<any>([]);

  const getPhotos = async (e: any) => {
    e.preventDefault();

    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=${process.env.NEXT_PUBLIC_API_UNSPLASH_KEY}`
    );
    setPhotos(res.data.results);
  };

  return (
    <>
      <SearchImageForm getPhotos={getPhotos} />
      <ul>
        一覧
        {photos.map((photo: any) => (
          <li key={photo.id}>
            <SearchImageResults photo={photo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchImage;
