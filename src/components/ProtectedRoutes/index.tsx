import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/userContext";

export const ProtectedRoutes:any | void = () => {
  const navigate = useNavigate();
  const { user, loadingAuth } = useContext(UserContext);
  if (loadingAuth) {
    return null;
  } else {
    return user ? <Outlet /> : navigate("/login");
  }
};

