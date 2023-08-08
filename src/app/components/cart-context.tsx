"use client";
import React, { createContext, useState } from "react";


export const CartContext = createContext<Array<any>>([]);
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
