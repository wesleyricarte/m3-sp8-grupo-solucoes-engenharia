import * as yup from "yup";

export const loginSchrema = yup.object().shape({
  email: yup
    .string()
    .required("O email é obrigatório.")
    .email("É necessário fornecer um E-mail."),

  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve contar no mínimo 6 (seis) caracteres"),
});
