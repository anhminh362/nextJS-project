import React from "react";

const Button = ({ name }: { name: string }) => {
  return (
    <button className=" rounded-full border bg-neutral-100 hover:scale-110  hover:ring-blue-600 px-2 py-1 flex min-w-[48px] items-center justify-center text-base  ring-1 ring-white  transition  ease-in-out ">
      {name}
    </button>
  );
};

export default Button;
