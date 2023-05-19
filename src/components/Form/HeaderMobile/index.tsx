import { Header, ImgLogoHeader, LinkNavigate, MenuNavigate } from "./style";
import logoTwo from "../../../imgs/logo-2.png";

const HeaderMobile = () => {
  return (
    <Header>
      <ImgLogoHeader src={logoTwo} alt="logo-img" />

      <MenuNavigate>
        <LinkNavigate to={"/"}>Início</LinkNavigate>
        <LinkNavigate to={"/login"}>Login</LinkNavigate>
        <LinkNavigate to={"/register"} style={{ color: "white" }}>
          Registro
        </LinkNavigate>
      </MenuNavigate>
    </Header>
  );
};

export default HeaderMobile;
