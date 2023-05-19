import styled from "styled-components";

export const HeaderStyle = styled.header`
  --margin-size: 10vw;
  --nav-link-gap: 15px;
  --header-heigth: 80px;
  --nav-margin: 20px;

  height: var(--header-heigth);
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary);
  div {
    display: flex;
    gap: var(--nav-link-gap);
    align-items: center;
    justify-content: space-between;
  }
  .active {
    color: var(--color-grey-0);
  }
  .inactive {
    /* color: var(--color-secundary); */
    color: var(--color-black);
  } /* 
    @media (max-width: 1000px){
        padding: 0px 100px;
    } */
  @media (max-width: 650px) {
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0px;
  }
`;
export const HeaderContainer = styled.div`
  width: 1160px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    padding-top: var(--nav-margin);
    div + div {
      margin: var(--nav-margin) 0px;
    }
    align-items: center;
  }
`;
