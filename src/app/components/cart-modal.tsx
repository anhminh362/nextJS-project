"use client";
import React from "react";
import { useModalContext } from "./modal-context";
import ListCartItem from "../../../ui/list-cart";
const CardModal = () => {
  const modalState = useModalContext();
  const isVisible = modalState.isOpen;
  if (!isVisible) return null;
  const CloseCardClick = () => {
    modalState.setIsOpen(false);
  };
  return (
    isVisible && (
      <div className="fixed  transition-all -translate-x-100 delay-1000 ease-in-out inset-0  backdrop-blur-[0.5px] backdrop-brightness-50 flex justify-end">
        <div className=" p-5 flex h-full w-full flex-col bg-neutral-200 fixed bottom-0 right-0 top-0p-6  md:w-1/4 translate-x-0">
          <div className="flex items-center justify-between ">
            <p className="text-lg font-semibold">My Cart</p>
            <button aria-label="Close cart" onClick={CloseCardClick}>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-300 text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 transition-all ease-in-out hover:scale-110 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <ListCartItem />
        </div>
      </div>
    )
  );
};

export default CardModal;
