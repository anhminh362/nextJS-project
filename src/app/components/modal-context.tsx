"use client";
import React, { useState } from "react";
import { createContext, useContext } from "react";

type ModalState = {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
};

const ModalContext = createContext<ModalState>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useModalContext = (): ModalState => {
  // 2. use the useContext hook
  const context = useContext(ModalContext);

  // 3. Make sure it's not null!
  if (!context) {
    throw new Error("Please use ThemeProvider in parent component");
  }

  return context;
};
export const ModalContextProvider = ({children}:{children:React.ReactNode}) => {
    // const [theme, setTheme] = useState<Themes>("system");
    const [isOpen, setIsOpen ]=useState(false)
    return (
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </ModalContext.Provider>
    );
  };
