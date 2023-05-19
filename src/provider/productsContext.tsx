import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iProductsProviderProps {
  children: React.ReactNode;
}

export interface iProducts {
  userId: number;
  img: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  type: string;
  id: number;
}

interface iProductsContext {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  createProduct: (formData: iProducts) => void;
  updateProduct: (formData: iProducts) => void;
  deleteProduct: (formData: iProducts) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  productId: number | null;
  setProductId: React.Dispatch<React.SetStateAction<null | number>>;
}

export const ProductsContext = createContext<iProductsContext>(
  {} as iProductsContext
);

export const ProductsProvider = ({ children }: iProductsProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [products, setProducts] = useState([] as iProducts[]);
  const [productId, setProductId] = useState<number | null>(null);
  const token = localStorage.getItem("@TOKEN");
  
  useEffect(() => {
    const productsList = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    productsList();
  }, []);

  const createProduct = async (formData: iProducts) => {
    try {
      setLoading(true);
      const response = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Produco criado com sucesso!");
      setLoading(false);
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      console.log(error);
      setLoading(false);
    }
  };

  const updateProduct = async (formData: iProducts ) => {
    try {
      setLoading(true);
      if (productId !== null) {
        const response = await api.patch(`/products/${productId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Produto editado com sucesso!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      console.log(error);
      setLoading(false);
    }
  };

  const deleteProduct = async () => {
    try {
      setLoading(true);
      if (productId !== null) {
        const response = await api.delete(`/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Produto apagado com sucesso!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        createProduct,
        updateProduct,
        deleteProduct,
        loading,
        addModal,
        updateModal,
        deleteModal,
        products,
        productId,
        setAddModal,
        setEditModal,
        setDeleteModal,
        setProductId,
        setProducts,
        setLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
