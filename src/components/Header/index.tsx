import { HeaderContainer, HeaderStyle } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HeaderContainer>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <Link
              className={
                window.location.pathname === "/" ? "active" : "inactive"
              }
              to={window.location.pathname === "/" ? "" : "/"}
            >
              Inicio
            </Link>
            <Link
              className={
                window.location.pathname === "/login" ? "active" : "inactive"
              }
              to={window.location.pathname === "/login" ? "" : "/login"}
            >
              Login
            </Link>
            <Link
              className={
                window.location.pathname === "/register" ? "active" : "inactive"
              }
              to={window.location.pathname === "/registro" ? "" : "/register"}
            >
              Registro
            </Link>
          </div>
        </HeaderContainer>
      </HeaderStyle>
    </>
  );
};
