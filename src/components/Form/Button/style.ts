import styled from "styled-components";

const ButtonBrand = styled.button`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 0;
  background-color: var(--color-primary);
  color: var(--color-white);
  transition: 0.2s ease;
  margin-top: 10px;

  :hover {
    background-color: var(--color-secundary);
    transition: 0.2s ease;
  }
`;

const ButtonFixed = styled.button`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 0;
  background-color: var(--color-white);
  color: var(--color-grey-300);
  border: 2px solid var(--color-grey-300);
  transition: 0.2s ease;
  margin-top: 10px;

  :hover {
    border: 2px solid var(--color-grey-600);
    color: var(--color-grey-600);
    transition: 0.2s ease;
  }
`;

export { ButtonBrand, ButtonFixed };
