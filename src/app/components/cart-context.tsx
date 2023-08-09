"use client";
import React, { createContext, useState } from "react";

type Cart={
  cart:any,
  setCart:()=>{}
}
export const CartContext = createContext<any>([]);
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
