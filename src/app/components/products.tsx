"use client";
import { useState } from "react";
import { ButtonGroup } from "../../../ui/button";
import { Product } from "../page";
import AddToCart from "../../../ui/Button-add-to-cart";

const img = [
  "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1200&q=75",
  "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-light.png%3Fv%3D1689796304&w=1200&q=75",
];

export default function Products({ item }: { item: object }) {
  const [nextImg, setNextImg] = useState(img[0]);
  const HandleNextImgClick = () => {
    nextImg === img[0] ? setNextImg(img[1]) : setNextImg(img[0]);
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-4 ">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row">
        <div className="h-full w-full basis-full lg:basis-4/6 ">
          <div className=" relative aspect-square overflow-hidden h-full max-h-[550px] w-full ">
            <img
              src={nextImg}
              alt="white-bag"
              className="w-full h-full object-contain"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              sizes="(min-with:1024px) 66vw,100vw"
            />
            <div className="absolute bottom-[15%]  flex w-full justify-center">
              <div className="flex rounded-full bg-neutral-50/80 backdrop-blur-sm text-neutral-500 items-center h-11 mx-auto border border-white">
                <button
                  onClick={HandleNextImgClick}
                  className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                >
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
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    ></path>
                  </svg>
                </button>
                <div className="mx-1 h-6 w-px bg-neutral-300"></div>
                <button
                  onClick={HandleNextImgClick}
                  className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                >
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
            <li className="h-auto w-20">
              <button
                onClick={() => setNextImg(img[1])}
                className="w-full h-full"
              >
                <div
                  className={`${
                    nextImg === img[1]
                      ? " border-blue-700 border-2"
                      : " hover:border-blue-500"
                  } w-full h-full bg-white overflow-hidden rounded flex justify-center border `}
                >
                  <img
                    src={img[1]}
                    alt=""
                    className="ease-in-out hover:scale-105 relative h-full w-full object-contain transition "
                    style={{ width: 80, height: 80, color: "transparent" }}
                  />
                </div>
              </button>
            </li>
            <li className="h-auto w-20">
              <button
                onClick={() => setNextImg(img[0])}
                className="w-full h-full"
              >
                <div
                  className={`${
                    nextImg === img[0]
                      ? " border-blue-700 border-2"
                      : " hover:border-blue-500"
                  } w-full h-full bg-white overflow-hidden rounded flex justify-center border `}
                >
                  <img
                    src={img[0]}
                    alt=""
                    className="ease-in-out hover:scale-105 relative h-full w-full object-contain transition "
                    style={{ width: 80, height: 80, color: "transparent" }}
                  />
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div className="basis-full lg:basis-2/6 ">
          <div className="mb-6 flex flex-col border-b pb-6 ">
            <h1 className=" mb-3 text-5xl font-medium">Acme Drawstring Bag</h1>
            <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
              <p>
                $12.00<span className="ml-1 inline">USD</span>
              </p>
            </div>
          </div>
          <div className="block">
            <h1 className=" uppercase mb-4 text-sm font-medium">Color</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <ButtonGroup
                type="color"
                listItems={Product.quantity}
                items={item}
              />
            </div>
          </div>
          <div className="block">
            <h1 className=" uppercase mb-4 text-sm font-medium">Size</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <ButtonGroup
                type="size"
                listItems={Product.quantity[0].size}
                items={item}
              />
            </div>
          </div>
          <ul className="list-disc list-inside p-3 text-sm space-y-1 mb-9">
            <li>Strong 210D ripstop nylon drawstring bag</li>
            <li>Available in multiple sizes</li>
            <li>Easy-to-close durable drawstring</li>
            <li>Sturdy, reusable, and resilient</li>
          </ul>
          <AddToCart item={item} />
        </div>
      </div>
    </div>
  );
}
