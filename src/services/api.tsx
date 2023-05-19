import axios from "axios";

export const api = axios.create({
  baseURL: "https://solucoes-engenharia.onrender.com",
  timeout: 3000,
});
