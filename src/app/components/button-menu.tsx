"use client";
import React, { useEffect, useState } from "react";
import { Nav } from "./nav";

const MenuOpenButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };
  // Function to update isOpenMenu based on screen size
  const updateMenuState = () => {
    const isMdOrSmaller = window.innerWidth <= 768;
    console.log(isMdOrSmaller);
    if (!isMdOrSmaller) setMenuOpen(false);
  };

  // Run the updateMenuState function when the component mounts
  useEffect(() => {
    updateMenuState();

    // Add a resize event listener to update isOpenMenu when the screen size changes
    window.addEventListener("resize", updateMenuState);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateMenuState);
    };
  }, []);
  // const navStyle={}
  return (
    
    <nav
      className={`${
        isMenuOpen ? "flex-col w-full h-full bg-neutral-100  fixed top-0 left-0 right-0 bottom-0 z-10 overflow-hidden" : "flex-row justify-between"
      }   flex  md:flex-row md:items-center  p-4 lg:px-6`}
      
    >
      <div className="block flex-none md:hidden ">
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          aria-label="Mobile menu"
          className="  flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors  md:hidden"
        >
          {!isMenuOpen ? (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <Nav isOpenMenu={isMenuOpen} />
    </nav>
  );
};

export default MenuOpenButton;
