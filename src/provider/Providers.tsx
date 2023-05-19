import React from "react";
import { UserProvider } from "./userContext";
import { ProductsProvider } from "./productsContext";

interface iProductProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProductProviderProps) => {
  return (
    <UserProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UserProvider>
  );
};
