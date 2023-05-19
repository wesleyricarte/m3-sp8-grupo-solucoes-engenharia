import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  background-color: var(--color-primary);
  z-index: 1;
  min-width: 400px;
  @media (min-width: 800px) {
    
    display: none;
  }
`;

const ImgLogoHeader = styled.img`
  width: 130px;
  height: 45px;
`;

const MenuNavigate = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
`;

const LinkNavigate = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(51, 51, 51, 0.5);
  transition: 0.2s ease;

  :hover {
    color: var(--color-white);
    transition: 0.2s ease;
  }
`;

export { Header, ImgLogoHeader, MenuNavigate, LinkNavigate };
