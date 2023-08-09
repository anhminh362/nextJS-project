"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { useModalContext } from "./modal-context";
import { CartContext } from "./cart-context";

export const Nav = ({ isOpenMenu }: { isOpenMenu: boolean }) => {
  const modalState = useModalContext();
  const list = useContext(CartContext);
  const count = list.cart.length;
  const HandleOpenCard = () => {
    modalState.setIsOpen(true);
  };
  const NavLink = ["All", "Shirts", "Stickers"];
  return (
    <div
      className={`${
        isOpenMenu ? " flex-col-reverse" : ""
      } flex gap-9 md:flex-row w-full md:items-center `}
      id="navbar-default"
      tabIndex={-1}
      aria-hidden={!isOpenMenu}
    >
      <div className="flex w-full md:w-1/3">
        <Link
          href={"/"}
          className={`${
            isOpenMenu
              ? "hidden"
              : " mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          } `}
        >
          <div className="flex flex-none items-center justify-center border bg-white border-neutral-200 h-[40px] w-[40px] rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Acme Store logo"
              viewBox="0 0 32 28"
              className=" fill-black dark:fill-white h-[16px] w-[16px]"
            >
              <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
              <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
            </svg>
          </div>
          <div className="ml-2 flex text-base font-medium uppercase md:hidden lg:block">
            Acme Store
          </div>
        </Link>
        <ul
          className={`${
            isOpenMenu
              ? " w-full  h-full flex flex-col text-black text-lg"
              : "hidden  text-neutral-500 text-base "
          } gap-6 md:flex md:items-center `}
        >
          {NavLink.map((tab) => (
            <li>
              <Link
                href={`/product/${tab}`}
                className={
                  isOpenMenu
                    ? "  hover:text-neutral-500"
                    : " underline-offset-4 hover:text-black hover:underline"
                }
              >
                {tab}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          isOpenMenu
            ? " w-full  h-full mt-6"
            : "hidden justify-center md:flex md:w-1/3"
        }  `}
      >
        <form
          action=""
          className="w-max-[550px] relative w-full lg:x-80 xl:x-full"
        >
          <input
            type="text"
            name="search"
            className="w-full rounded-lg bg-white border px-4 pt-1 pb-2 text-base text-black placeholder:text-neutral-500"
            placeholder="Search for products..."
          />
          <div className="flex right-0 top-0 absolute mr-3 h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </form>
      </div>
      {!isOpenMenu && (
        <div className=" flex justify-end w-1/3">
          <div className="flex justify-end md:w-1/3">
            <button className="" onClick={HandleOpenCard}>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 transition-all ease-in-out hover:scale-110 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  ></path>
                </svg>
                {count > 0 && (
                  <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                    {count}
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
