"use client";
import React, { useState } from "react";

export const Button = ({
  name,
  state,
  isActive,
  onClick,
}: {
  name: string;
  state: boolean;
  isActive: boolean;
  onClick: any;
}) => {
  return state ? (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? "ring-2 ring-blue-600"
          : "hover:ring-blue-600  ring-white hover:scale-110  transition  ease-in-out "
      } rounded-full border bg-neutral-100   px-2 py-1 flex min-w-[48px] 
     items-center justify-center text-base  ring-1  `}
      value={name}
    >
      {name}
    </button>
  ) : (
    <button
      value={name}
      disabled
      className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 py-1 px-2 text-base ring-neutral-300 ring-1 text-neutral-500"
    >
      {name}
    </button>
  );
};
export const ButtonGroup = ({
  listItems,
  type,
  items,
}: {
  listItems: Array<any>;
  type: string;
  items: any;
}) => {
  const [currentButtonSize, setCurrentButtonSize] = useState("");
  const [currentButtonColor, setCurrentButtonColor] = useState("");

  return type === "size"
    ? listItems.map((item) => (
        <Button
          name={item.value}
          key={item.value}
          state={true}
          isActive={item.value === currentButtonSize}
          onClick={() => {
            setCurrentButtonSize(item.value);
            items.setSelectedItem({
              ...items.selectedItem,
              size: item.value,
            });
          }}
        />
      ))
    : listItems.map((item) => (
        <Button
          key={item.color}
          name={item.color}
          state={true}
          isActive={item.color === currentButtonColor}
          onClick={() => {
            setCurrentButtonColor(item.color);
            items.setSelectedItem({
              ...items.selectedItem,
              color: item.color,
            });
          }}
        />
      ));
};
