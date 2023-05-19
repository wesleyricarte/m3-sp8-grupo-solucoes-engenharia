import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
export const App = () => {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyle />
      <RoutesMain />
    </div>
  );
};
