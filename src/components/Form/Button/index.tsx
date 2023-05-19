import { useNavigate } from "react-router-dom";
import { ButtonBrand, ButtonFixed } from "./style";

export interface iCampButton {
  type: "button" | "submit";
  text: string;
  page?: string;
  classname?:string;
}

const ButtonBlue = ({ type, text }: iCampButton) => {
  return <ButtonBrand type={type}>{text}</ButtonBrand>;
};

const ButtonWhite = ({ type,classname, text, page }: iCampButton) => {
  const navigate = useNavigate();

  return (
    <ButtonFixed className={classname} type={type} onClick={() => navigate(`/${page}`)}>
      {text}
    </ButtonFixed>
  );
};

export { ButtonBlue, ButtonWhite };
