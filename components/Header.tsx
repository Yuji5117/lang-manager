import styled from "styled-components";

function Header({}: {}) {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Vocabularies</h1>
        {/* アバター */}
        <div>アバター</div>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e5e5e5;
  opacity: 0.8;
  display: flex;
`;

const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 28px;
  padding: 5px 0 5px 10px;
  border: 1px solid transparent;
  background-color: #ffffff;
  border-radius: 3px;
  ::placeholder {
    color: #e5e5e5;
  }

  :focus {
    outline: none;
  }
`;
