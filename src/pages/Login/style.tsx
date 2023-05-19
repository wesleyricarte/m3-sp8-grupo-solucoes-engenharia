import styled from "styled-components";
export const StyledContainerLogin = styled.div`

  header {
    margin-bottom: 30px;
  }

  @media (min-width: 800px) {
    header {
      display: none;
    }
  }
`;

export const StyledLoginSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  & figure {
    display: none;
  }

  @media (min-width: 800px) {
    & {
      display: flex;
      justify-content: flex-start;
      gap: 5%;
    }

    & figure {
      display: block;
      width: 60%;
      height: 1024px;
    }

    & figure img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledLoginContainerForm = styled.div`
  min-width: 301px;
  width: 90%;
  max-width: 380px;
  height: 517px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-100);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  & div:first-child {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  & img {
    width: 230px;
    height: 78px;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 15px;
    
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & label {
    font-weight: 400;
    font-size: 14px;
  }

  & input {
    width: 100%;
    height: 29px;
    max-width: 354px;
    color: var(--color-grey-300);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: 4px;
    outline: none;
    padding-left: 16px;
    margin: 0 auto;
  }

  & span {
    color: var(--color-negative);
    font-weight: 400;
    font-size: 12px;
  }

  & button {
    margin: 0 auto;
  }

  & h3 {
    text-align: center;
    margin-top: 22px;
  }

  & p {
    text-align: center;
    margin-bottom: 22px;
  }

  & .ancora {
    width: 100%;
    max-width: 354px;
    height: 29px;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--color-grey-300);
    background-color: var(--color-white);
    border: 1px solid var(--color-grey-100);
    border-radius: 4px;
    text-align: center;
    padding: 5px;
    margin: 0 auto;
  }

  @media (min-width: 800px) {
    max-width: 406px;
    height: 600px;

    & div:first-child {
      height: 188px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & img {
      width: 311px;
      height: 104px;
    }

    & form {
      margin: 0 26px;
    }

    & div {
      gap: 12px;
    }

    & label {
      font-size: 20px;
    }

    & input {
      height: 39px;
    }

    & span {
      color: var(--color-negative);
      font-weight: 400;
      font-size: 14px;
    }

    & h3 {
      text-align: center;
      margin-top: 36px;
    }

    & p {
      text-align: center;
      margin-bottom: 36px;
    }

    .ancora {
      height: 39px;
      font-size: 1.25rem;
      padding: 5px;
      margin-bottom: 20px;
    }
  }
`;
export const StyledBackHome = styled.article`
display: flex;
width: 100%;
justify-content: space-between;

.linkHome{
    
    font-weight: 600;
    font-size: 20px;
    padding: 3px;
    color: var(--color-primary);

}
`