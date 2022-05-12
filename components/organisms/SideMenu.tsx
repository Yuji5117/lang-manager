import Link from "next/link";
import styled from "styled-components";

const SideMenu = () => {
  return (
    <Wrapper>
      <Container>
        <HomeButton>
          {/* <Link
            to="/vocabulary"
            style={{ textDecoration: "none", color: "white" }}
          >
            Lang Manager
          </Link> */}
        </HomeButton>
        <MenuList>
          <li>
            {/* <Link
              to="/vocabulary"
              style={{ textDecoration: "none", color: "white" }}
            >
              Vocabulary
            </Link>
          </li>
          <li>
            <Link
              to="/table"
              style={{ textDecoration: "none", color: "white" }}
            >
              Table
            </Link>
          </li>
          <li>
            <Link
              to="/tweet"
              style={{ textDecoration: "none", color: "white" }}
            >
              Tweet
            </Link>
          </li>
          <li>
            <Link
              to="/tweet-list"
              style={{ textDecoration: "none", color: "white" }}
            >
              Tweet List
            </Link> */}
          </li>
        </MenuList>
      </Container>
    </Wrapper>
  );
};

export default SideMenu;

const Wrapper = styled.div`
  height: 100vh;
  width: 400px;
  background-color: rgb(47, 153, 206);
  opacity: 0.8;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 30px 25px;
`;

const HomeButton = styled.div`
  display: flex;
  font-size: 20px;
  list-style-type: none;
  margin-bottom: 50px;
`;

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 18px;
  flex-flow: column;
  padding-left: 0;
  & > * {
    margin: 8px 0;
    cursor: pointer;
    position: relative;
  }
  & > *::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #ffffff;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }
  & > *:hover::after {
    transform: scale(1, 1);
  }
`;
