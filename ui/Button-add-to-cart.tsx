"use client";
import { CartContext } from "@/app/components/cart-context";
// import { useModalContext } from "@/app/components/modal-context";
import React, { useContext,} from "react";

const AddToCart = ({ item }: { item: any }) => {
  const listContext = useContext(CartContext);
  const list = listContext.cart;
  const HandleAddToCartButton = () => {
    const count = 1;
    if (list.length === 0)
      return listContext.setCart([
        {
          id: item.selectedItem.color + "_" + item.selectedItem.size,
          color: item.selectedItem.color,
          size: item.selectedItem.size,
          qty: 1,
        },
      ]);
    const indexSelectedItem = list.findIndex(
      (i: any) =>
        i.id === item.selectedItem.color + "_" + item.selectedItem.size
    );

    if (indexSelectedItem === -1) {
      listContext.setCart([
        ...list,
        {
          id: item.selectedItem.color + "_" + item.selectedItem.size,
          color: item.selectedItem.color,
          size: item.selectedItem.size,
          qty: 1,
        },
      ]);
    } else {
      listContext.setCart(
        list.map((i:any) => {
          if (i.id === item.selectedItem.color + "_" + item.selectedItem.size) {
            i.qty += 1;
            return i;
          }
          return i;
        })
      );
    }
  };
  return (
    <button
      disabled={!item.selectedItem.color || !item.selectedItem.size}
      onClick={HandleAddToCartButton}
      aria-label="Add item to cart"
      className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
    >
      <div className="absolute left-0 ml-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          ></path>
        </svg>
      </div>
      <span>Add To Cart</span>
    </button>
  );
};

export default AddToCart;
