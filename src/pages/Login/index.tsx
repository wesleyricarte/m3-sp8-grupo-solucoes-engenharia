import {
  StyledBackHome,
  StyledContainerLogin,
  StyledLoginContainerForm,
  StyledLoginSection,
} from "./style";
import logo from "../../assets/imgs/logoDesktop.png";
import imagelogindesktop from "../../assets/imgs/construction 1.png";
import { StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchrema } from "./schemas";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext";
export interface iLoginFormValues {
  email: string;
  password: string | number;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchrema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit: SubmitHandler<iLoginFormValues> = async (data) => {
    await userLogin(data);
    reset();
    navigate("/dashboard");
  };

  return (
    <StyledContainerLogin>
      <Header />
      <StyledLoginSection>
        <figure>
          <img src={imagelogindesktop} alt="imagem da página de login" />
        </figure>
        <StyledLoginContainerForm>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <form onSubmit={handleSubmit(submit)}>
          <StyledBackHome>
            <StyledTitle fontSize="Heading-2-500" tag="h1">
              Login
            </StyledTitle>
             <Link className="linkHome" to={"/"}>Voltar para a Home</Link></StyledBackHome>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Digite seu email aqui"
                id="email"
                {...register("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="Digite seu email aqui"
                id="password"
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <StyledButton buttonSize="default" buttonStyle="btnBlue">
              Acessar
            </StyledButton>
          </form>

          <div>
            <StyledTitle fontSize="Body-2-500" tag="h3">
              Não possui conta?
            </StyledTitle>
            <StyledTitle fontSize="Body-5-400" tag="p">
              Clique no botão cadastrar para criar sua conta
            </StyledTitle>
          </div>

          <Link className="ancora" to={"/register"}>Cadastrar</Link>
        </StyledLoginContainerForm>
      </StyledLoginSection>
    </StyledContainerLogin>
  );
};
