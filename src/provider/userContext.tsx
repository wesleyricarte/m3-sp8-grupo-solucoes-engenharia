import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";
import {
  notifyError,
  notifyErrorLogin,
  notifySucess,
  notifySucessLogin,
} from "../toastify";
import { iRegisterFormValues } from "../components/Form";
import { iLoginFormValues } from "../pages/Login";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  email: string;
  avatarUrl: string;
  id: number;
}

interface iRequestError {
  error: string;
}

interface iUserContext {
  user: iUser | null;
  loadingAuth: boolean;
  userLogin: (formData: iLoginFormValues) => void;
  userRegister: (formData: iRegisterFormValues) => void;
  userLogout: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const navigate = useNavigate();

  const userLogin = async (formData: iLoginFormValues) => {
    try {
      const response = await api.post("/login", formData);

      localStorage.setItem("@TOKEN", response.data.accessToken);

      

      localStorage.setItem("@USER",JSON.stringify( response.data.user));
      localStorage.setItem("@USERID", response.data.user.id)


      setLoadingAuth(true);
      setUser(response.data.user);
      notifySucessLogin();
    } catch (error) {
      notifyErrorLogin();
      const currentError = error as AxiosError<iRequestError>;
      toast.error(currentError.response?.data.error);
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USER");
    }
  };

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      const response = await api.post("/register", formData);

      notifySucess();
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      notifyError();
    }
  };

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, userLogout, user, loadingAuth }}
    >
      {children}
    </UserContext.Provider>
  );
};
