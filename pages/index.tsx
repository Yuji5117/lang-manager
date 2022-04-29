import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import MainBoard from "../components/MainBoard";
import SideMenu from "../components/SideMenu";

const Home: NextPage = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {/* <SideMenu />ß */}
        <MainContainer>
          <MainBoard filterValue={filterValue} />
        </MainContainer>
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
`;
