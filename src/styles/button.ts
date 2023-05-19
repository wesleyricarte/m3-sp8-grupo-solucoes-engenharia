import styled, { css } from "styled-components";

interface iStyledBtnProps {
  buttonSize: "default" | "modal" | "addProduct" | "logout";
  buttonStyle:
    | "noBorderBlue"
    | "noBorderBlack"
    | "btnBlue"
    | "btnGrey"
    | "btnRed";
}

export const StyledButton = styled.button<iStyledBtnProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          width: 100%;
          max-width: 354px;
          height: 29px;
          font-weight: 500;
          font-size: 0.875rem;
          @media (min-width: 800px) {
            font-size: 1.25rem;
            height: 39px;
          }
        `;

      case "modal":
        return css`
          width: 100%;
          max-width: 432px;
          height: 20px;
          font-weight: 700;
          font-size: 0.875rem;
          @media (min-width: 800px) {
            height: 40px;
            font-size: 1.5rem;
          }
        `;

      case "addProduct":
        return css`
          font-weight: 700;
          font-size: 0.625rem;
          @media (min-width: 800px) {
            font-size: 1.5rem;
          }
        `;

      case "logout":
        return css`
          font-weight: 500;
          font-size: 0.625rem;
          @media (min-width: 800px) {
            font-size: 1.375rem;
          }
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "noBorderBlue":
        return css`
          color: var(--color-secundary);
          border: transparent;
          background-color: transparent;

          &:hover {
            background-color: transparent;
            color: var(--color-primary);
          }
        `;

      case "noBorderBlack":
        return css`
          color: var(--color-black);
          border: transparent;
          background-color: transparent;
        `;

      case "btnBlue":
        return css`
          color: var(--color-white);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: 4px;

          &:hover {
            background-color: var(--color-secundary);
            border: 1px solid var(--color-secundary);
          }
        `;

      case "btnGrey":
        return css`
          color: var(--color-grey-300);
          background-color: var(--color-white);
          border: 1px solid var(--color-grey-100);
          border-radius: 4px;
        `;

      case "btnRed":
        return css`
          color: var(--color-white);
          background-color: var(--color-negative);
          border: 1px solid var(--color-negative);
          border-radius: 4px;

          &:hover {
            color: var(--color-white);
            background-color: #c92f37;
            border: 1px solid #c92f37;
          }
        `;
    }
  }}
`;
