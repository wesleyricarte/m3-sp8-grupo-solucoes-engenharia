import { FormRegister } from "../../components/Form";
import HeaderMobile from "../../components/Form/HeaderMobile";
import background from "../../imgs/construct-background.jpeg";
import { ImgBackground, MainRegister } from "./style";

const Register = () => {
  return (
    <>
    <HeaderMobile/>
    <MainRegister>
        <FormRegister/>
        <ImgBackground src={background} alt="construção-img" />
    </MainRegister></>
  )
}

export default Register