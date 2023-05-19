import styled from "styled-components";

const MainRegister = styled.main`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100vh;

  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
    height: fit-content;
  }
`;

const ImgBackground = styled.img`
  width: 55%;
  height: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export { MainRegister, ImgBackground };
