'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useModalContext } from "./modal-context";

const CardModal = () => {
  const modalState=useModalContext();
  const isVisible=modalState.isOpen;
  if (!isVisible) return null;
  // const [isOpen,setIsOpen]=modalState
  const CloseCardClick=()=>{
    modalState.setIsOpen(false)
  }
  return (
   {isVisible}&&( <div className="fixed  inset-0  backdrop-blur-[0.5px] backdrop-brightness-50 flex justify-end">
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
     <div className="flex h-full flex-col justify-between overflow-hidden p-1">
       <ul className="flex-grow overflow-auto py-4">
         <li className="flex w-full flex-col border-b border-neutral-300 ">
           <div className="relative flex w-full flex-row justify-between px-1 py-4">
             <div className="absolute z-40 -mt-2 ml-[55px]">
               <button
                 aria-label="Remove cart item"
                 className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke-width="1.5"
                   stroke="currentColor"
                   aria-hidden="true"
                   className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M6 18L18 6M6 6l12 12"
                   ></path>
                 </svg>
               </button>
             </div>
             <Link className="z-30 flex flex-row space-x-4" href="/">
               <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                 <img
                   alt="Acme Drawstring Bag"
                   loading="lazy"
                   width="64"
                   height="64"
                   className="h-full w-full object-cover"
                   src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=64&q=75"
                 />
               </div>
               <div className="flex flex-1 flex-col text-base">
                 <span className="leading-tight">Acme Drawstring Bag</span>
                 <p className="text-sm text-neutral-500 dark:text-neutral-400">
                   Black / 7 x 9 inch
                 </p>
               </div>
             </Link>
             <div className="flex h-16 flex-col justify-between">
               <p className="flex justify-end space-y-2 text-right text-sm">
                 $7.00
                 <span className="ml-1 inline">USD</span>
               </p>
               <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-300 dark:border-neutral-700">
                 <button
                   aria-label="Reduce item quantity"
                   className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     aria-hidden="true"
                     className="h-4 w-4 dark:text-neutral-500"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M19.5 12h-15"
                     ></path>
                   </svg>
                 </button>
                 <p className="w-6 text-center">
                   <span className="w-full text-sm">1</span>
                 </p>
                 <button
                   aria-label="Increase item quantity"
                   className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     aria-hidden="true"
                     className="h-4 w-4 dark:text-neutral-500"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M12 4.5v15m7.5-7.5h-15"
                     ></path>
                   </svg>
                 </button>
               </div>
             </div>
           </div>
         </li>
       </ul>
       <div className="py-4 text-base text-neutral-500 dark:text-neutral-400">
         <div className="mb-3 flex items-center justify-between border-b border-neutral-300 pb-1 dark:border-neutral-700">
           <p>Taxes</p>
           <p className="text-right text-base text-black dark:text-white">
             $0.00<span className="ml-1 inline">USD</span>
           </p>
         </div>
         <div className="mb-3 flex items-center justify-between border-b border-neutral-300 pb-1 pt-1 dark:border-neutral-700">
           <p>Shipping</p>
           <p className="text-right">Calculated at checkout</p>
         </div>
         <div className="mb-3 flex items-center justify-between border-b border-neutral-300 pb-1 pt-1 dark:border-neutral-700">
           <p>Total</p>
           <p className="text-right text-base text-black dark:text-white">
             $7.00
             <span className="ml-1 inline">USD</span>
           </p>
         </div>
       </div>
       <Link href={""} className="block w-full rounded-full bg-blue-600 p-3 text-center text-base font-medium text-white opacity-90 hover:opacity-100">
       Proceed to Checkout
       </Link>
     </div>
   </div>
 </div>)
  );
};

export default CardModal;
