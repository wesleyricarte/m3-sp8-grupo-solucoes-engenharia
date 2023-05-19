import logo from "../../assets/imgs/logo.png";
import { StyledNotFound } from "./style";
import { BiSad } from "react-icons/bi";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="position">
        <img src={logo} alt="logo" />
        <h1>404 ERROR</h1>
        <span>
          <p>Não encontramos essa página.</p>
          <BiSad />
        </span>

        <Link className="navigate" to={"/"}>Voltar para Home</Link>
      </div>
    </StyledNotFound>
  );
};
