import React, { SetStateAction } from "react";
import styled from "styled-components";

interface PropsType {
  setIsActive: any;
}

const SearchImageModalHeader = ({ setIsActive }: PropsType) => {
  return (
    <Wrapper>
      <SearchImageTabList>
        <li>
          <button role="tab" type="button" onClick={() => setIsActive(1)}>
            Upload
          </button>
        </li>
        <li>
          <button role="tab" type="button" onClick={() => setIsActive(2)}>
            Unsplash
          </button>
        </li>
      </SearchImageTabList>
    </Wrapper>
  );
};

export default SearchImageModalHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #ededec;
`;

const SearchImageTabList = styled.ul`
  height: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;

  & * + * {
    padding-left: 20px;
  }
`;
