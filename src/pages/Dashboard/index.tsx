import { MdOutlineInventory } from "react-icons/md";
import ControlPanel from "../../components/ControlPanel";
import { StyledDashboard } from "./style";
import { CardProducts } from "../../components/CardProducts";
import { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";
import dashlayout from "../../assets/imgs/dashlayout.png";
import { ModalRegisterProduct } from "../../components/Modal";

export const DashBoard = () => {
  const { products } = useContext(ProductsContext);
  return (
    <StyledDashboard>
      <ControlPanel />

      <main>
        <div className="controlStock">
          <h1>Controle de Estoque</h1>
          <MdOutlineInventory className="iconStock" />
        </div>
        <div className="addProducts">
          <ModalRegisterProduct />
        </div>
        <ul>
          {products.map((element) => (
            <CardProducts key={element.id} element={element} />
          ))}
        </ul>
      </main>
      <img className="imgLayout" src={dashlayout} alt="" />
    </StyledDashboard>
  );
};
