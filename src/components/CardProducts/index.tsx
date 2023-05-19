import { StyledTitle } from "../../styles/typography";
import { CardStyles, IconDiv, InfoDiv } from "./style";
import { iProducts } from "../../provider/productsContext";
import { ModalDeleteProduct, ModalUpdateProduct } from "../Modal";

interface iProps {
  element: iProducts;
}
export interface iCard {

  userId: number;
  img: string;
  name: string;
  stock: number;
  price: number;
  type: string;
  id: number;
}

export const CardProducts = ({ element }: iProps) => {

  function FormatPrice(value: number) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <CardStyles>
      <img src={element.img} alt="" />
      <InfoDiv>
        <StyledTitle
          className=""
          tag="h1"
          fontSize="Heading-6-400"
          children={element.name}
        />
        <div>
          <div>
            <StyledTitle
              className=""
              tag="h5"
              fontSize="Heading-8-400"
              children={FormatPrice(element.price)}
            />
            <StyledTitle
              className=""
              tag="h5"
              fontSize="Heading-8-400"
              children={element.type}
            />
          </div>
          <div>
            <StyledTitle
              className=""
              tag="h5"
              fontSize="Heading-8-400"
              children="Quantidade"
            />
            <StyledTitle
              className=""
              tag="h5"
              fontSize="Heading-8-400"
              children={element.stock + " un."}
            />
          </div>
        </div>
      </InfoDiv>
      <IconDiv>

        <ModalDeleteProduct 
         
        />


        <ModalUpdateProduct name={element.name} price={element.price} type={element.type} stock={element.stock} img={element.img} id={element.id}
        
        />
      </IconDiv>
    </CardStyles>
  );
};

