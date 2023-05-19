import { ErrorMessage, Form, ImgLogo, TitleRegister } from "./style";
import logo from "../../imgs/logo.png";
import Input from "./Input";
import { ButtonBlue, ButtonWhite } from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export interface iRegisterFormValues {
  email: string;
  password: string;
  confpassword: string;
  photoLink: string;
}

const FormRegister = () => {
  const { userRegister } = useContext(UserContext);
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Digite um email válido"),
    password: yup.string().required("Senha obrigatória"),
    confpassword: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .oneOf([yup.ref("password"), null], "As senhas não correspondem"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    resolver: yupResolver(formSchema),
  });
  const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
    await userRegister(data);
    reset();
    navigate("/login");
  };

  return (
    <Form onSubmit={handleSubmit(submit)} noValidate>
      <ImgLogo src={logo} alt="logo-img" />
<div className="positionButton">
      <TitleRegister>Cadastro</TitleRegister>
      <Link className="linkHome" to={"/"}>Voltar para a Home</Link></div>

      <Input
        name="Email"
        id="email"
        placeholder="Digite aqui seu email"
        type="email"
        register={register}
      />
      {errors.email?.message && (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      )}
      <Input
        name="Senha"
        id="password"
        placeholder="Digite aqui sua senha"
        type="password"
        register={register}
      />
      {errors.password?.message && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <Input
        name="Confirmar senha"
        id="confpassword"
        placeholder="Digite sua senha novamente"
        type="password"
        register={register}
      />
      {errors.confpassword?.message && (
        <ErrorMessage>{errors.confpassword.message}</ErrorMessage>
      )}
      <Input
        name="Link da foto de perfil"
        id="photoLink"
        placeholder="Insira o link aqui"
        type="text"
        register={register}
      />
      {errors.photoLink?.message && (
        <ErrorMessage>{errors.photoLink.message}</ErrorMessage>
      )}

      <ButtonBlue type="submit" text="Cadastrar" />
      <ButtonWhite classname="buttonGreyRegister" type="button" text="Voltar para o login" page="login" />
    </Form>
  );
};

export { FormRegister };
