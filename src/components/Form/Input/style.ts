import styled from "styled-components";

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 2px;
  margin-top: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const InputCamp = styled.input`
  outline: none;
  width: 100%;
  height: 40px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: var(--color-grey-0);
  padding: 0 20px;
  color: var(--color-grey-600);
  font-weight: 400;
  font-size: 14px;
  transition: 0.2s ease;

  ::placeholder {
    font-weight: 500;
    color: var(--color-grey-300);
  }
  :focus {
    transition: 0.2s ease;
    border: 2px solid var(--color-grey-600);
  }
`;

export { Label, InputCamp, DivInput };
