"use client";

import React, { useState } from "react";
import Products from "./components/products";

export const Product = {
  name: "Acme Drawstring Bag",
  img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=64&q=75",

  quantity: [
    {
      color: "white",
      size: [
        { value: "6 x 8 inch", number: 0 },
        { value: "7 x 9 inch", number: 8 },
        { value: "8 x 11 inch", number: 8 },
        { value: "10 x 15 inch", number: 8 },
        { value: "9 x 12 inch", number: 8 },
        { value: "12 x 16 inch", number: 8 },
      ],
    },
    {
      color: "black",
      size: [
        { value: "6 x 8 inch", number: 8 },
        { value: "7 x 9 inch", number: 8 },
        { value: "8 x 11 inch", number: 8 },
        { value: "10 x 15 inch", number: 8 },
        { value: "9 x 12 inch", number: 8 },
        { value: "12 x 16 inch", number: 0 },
      ],
    },
  ],
};
const Page = () => {
  const [selectedItem, setSelectedItem] = useState({});
  return <Products item={{ selectedItem, setSelectedItem }} />;
};

export default Page;
