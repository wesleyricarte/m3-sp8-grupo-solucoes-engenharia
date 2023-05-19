import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { StyledButton } from "../../styles/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdAddCircle } from "react-icons/io";
import { StyledModalRegisterProduct } from "./modal";
import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";

export interface iModalProduct {
  userId: number;
  img: string;
  name: string;
  stock: number;
  description:string;
  price: number;
  type: string;
  id: number;
}

export const ModalRegisterProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { createProduct } = useContext(ProductsContext);
  const userid = localStorage.getItem("@USERID")
  

  const { register, handleSubmit, reset } = useForm<iModalProduct>({
    defaultValues: {
      userId: userid,
      name: "",
      type: "",
    },
  });

  const submit: SubmitHandler<iModalProduct> = async (data) => {
    console.log(data);
    createProduct(data);
    reset();
  };

  return (
    <StyledModalRegisterProduct>
      <StyledButton
        onClick={onOpen}
        buttonSize="addProduct"
        buttonStyle="noBorderBlue"
      >
        Adicionar Produto <IoMdAddCircle className="iconAdd" />
      </StyledButton>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent w={480} borderRadius={4}>
          <ModalHeader
            fontFamily="Yantramanav"
            borderTopStartRadius={4}
            borderTopEndRadius={4}
            fontSize={22}
            backgroundColor="#E0E0E0"
            fontWeight={700}
          >
            Cadastrar Produto
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(submit)}>
            <ModalBody pb={5} backgroundColor="#F5F5F5">
              <FormControl>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Nome
                </FormLabel>
                <Input
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="text"
                  {...register("name")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Preço
                </FormLabel>
                <Input
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="number"
                  placeholder="R$"
                  {...register("price")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Categoria
                </FormLabel>
                <Input
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="text"
                  {...register("type")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Quantidade
                </FormLabel>
                <Input
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="number"
                  {...register("stock")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Imagem do Produto
                </FormLabel>
                <Input
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="text"
                  {...register("img")}
                />
              </FormControl>

            </ModalBody>
            
            <ModalFooter>
              <StyledButton
                buttonSize="modal"
                buttonStyle="btnBlue"
                onClick={onClose}
              >
                Cadastrar
              </StyledButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </StyledModalRegisterProduct>
  );
};
// interface iUpdateProducts {
//   name: string;
//   price: number;
//   type: string;
//   stock: number;
//   img: string;
// }
export const ModalUpdateProduct = (
  name: any,
  price: any,
  type: any,
  stock: any,
  img: any,
  id: any
) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateProduct, setProductId, productId } = useContext(ProductsContext);

  const { register, handleSubmit, reset } = useForm<iModalProduct>({
    defaultValues: {
      name: "",
      type: "",
    },
  });
  
  const submit: SubmitHandler<any> = async (data: any, id:any) => {
    setProductId(id)
    await updateProduct(data);
    reset();
  };

  return (
    <>
      <MdOutlineModeEdit onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent w={480} borderRadius={4}>
          <ModalHeader
            fontFamily="Yantramanav"
            borderTopStartRadius={4}
            borderTopEndRadius={4}
            fontSize={22}
            backgroundColor="#E0E0E0"
            fontWeight={700}
          >
            Editar Produto
          </ModalHeader>
          <ModalCloseButton />
        
          <form onSubmit={handleSubmit(submit)}>
            <ModalBody pb={5} backgroundColor="#F5F5F5">
              <FormControl>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Nome
                </FormLabel>
                <Input
                 
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="text"
                  {...register("name")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Preço
                </FormLabel>
                <Input
                  
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="number"
                  placeholder="R$"
                  {...register("price")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Categoria
                </FormLabel>
                <Input
                 
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="text"
                  {...register("type")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Quantidade
                </FormLabel>
                <Input
                 
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="number"
                  {...register("stock")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  fontFamily="Yantramanav"
                  fontSize={20}
                  fontWeight={400}
                >
                  Imagem do Produto
                </FormLabel>
                <Input
                  
                  variant="filled"
                  backgroundColor="#E0E0E0"
                  type="text"
                  {...register("img")}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <StyledButton
                buttonSize="modal"
                buttonStyle="btnBlue"
                onClick={onClose}
              >
                Salvar alterações
              </StyledButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalDeleteProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { deleteProduct } = useContext(ProductsContext);

  const submit = () => {
    deleteProduct();
  };

  return (
    <>
      <BsTrash onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size={"xs"} isCentered>
        <ModalOverlay />
        <ModalContent h={280}>
          <ModalHeader
            fontFamily="Yantramanav"
            borderTopStartRadius={4}
            borderTopEndRadius={4}
            fontSize={22}
            backgroundColor="#E0E0E0"
            fontWeight={700}
          >
            Excluir Produto
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" h={200}>
            <Flex align="center" justify="center">
              <Text
                align="center"
                fontFamily="Yantramanav"
                fontWeight={700}
                fontSize={20}
              >
                Tem certeza que deseja excluir este Produto?
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <StyledButton
              type="button"
              onClick={() => submit()}
              buttonSize="modal"
              buttonStyle="btnRed"
            >
              Excluir
            </StyledButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
