import styled, { css } from "styled-components";
import Typograph from "./components/Typography";

export const StyledTitle = styled(Typograph)`
  font-weight: ${(props) => props.fontWeight || 700};
  color: ${(props) => props.fontColor || ""};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "Heading-1-700":
        return css`
          font-size: 30px;
          font-weight: 700;
          @media (max-width: 800px) {
            font-size: 14px;
          }
        `;

      case "Heading-2-500":
        return css`
          font-size: 28px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 18px;
          }
        `;

      case "Heading-3-500":
        return css`
          font-size: 26px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 24px;
          }
        `;

      case "Heading-4-400":
        return css`
          font-size: 24px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 20px;
          }
        `;

      case "Heading-4-700":
        return css`
          font-size: 24px;
          font-weight: 700;
          @media (max-width: 800px) {
            font-size: 10px;
          }
        `;

      case "Heading-5-700":
        return css`
          font-size: 22px;
          font-weight: 700;
          @media (max-width: 800px) {
            font-size: 10px;
          }
        `;

      case "Heading-6-500":
        return css`
          font-size: 20px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 20px;
          }
        `;

      case "Heading-6-400":
        return css`
          font-size: 20px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 14px;
          }
        `;

      case "Heading-7-400":
        return css`
          font-size: 20px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 8px;
          }
        `;

      case "Heading-8-400":
        return css`
          font-size: 14px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 12px;
          }
        `;

      // BODY HERE

      case "Body-1-400":
        return css`
          font-size: 20px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 14px;
          }
        `;

      case "Body-2-400":
        return css`
          font-size: 18px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 16px;
          }
        `;

      case "Body-2-500":
        return css`
          font-size: 18px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 16px;
          }
        `;

      case "Body-3-400":
        return css`
          font-size: 18px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 12px;
          }
        `;

      case "Body-4-400":
        return css`
          font-size: 16px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 10px;
          }
        `;

      case "Body-5-400":
        return css`
          font-size: 14px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 12px;
          }
        `;

      case "Body-6-400":
        return css`
          font-size: 14px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 10px;
          }
        `;

      case "Body-7-400":
        return css`
          font-size: 14px;
          font-weight: 400;
          @media (max-width: 800px) {
            font-size: 8px;
          }
        `;
    }
  }}
`;

interface iStyledParagraphProps {
  error?: boolean;
}

export const StyledParagraph = styled.p<iStyledParagraphProps>`
  font-weight: 400;
  font-size: 14px;
  color: ${({ error }) => (error ? "var(--alert1)" : "var(--grey0)")};
`;
