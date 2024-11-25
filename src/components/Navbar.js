"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoLogoStencil } from "react-icons/io5";
import AlertDialoge from "./AlertDialoge";
import { Link } from "react-scroll";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menues = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "About", path: "about" },
    {
      id: 3,
      name: "Courses",
      path: "course",
    },
    {
      id: 4,
      name: "Testimonials",
      path: "testimonial",
    },
    { id: 5, name: "Contact us", path: "contact" },
  ];

  return (
    <>
      <div className="app z-[999] fixed bg-gray-100 w-full">
        <nav className="shadow-md">
          <div className="mx-auto ">
            <div className="flex items-center mx-auto justify-between px-8 md:px-14">
              {/* Primary menu and logo */}
              <div className="flex font-semibold text-lg gap-2 items-center  my-4">
                {/* logo */}
                  <IoLogoStencil  size={30} className="text-primary"/>
                <h1 >SKILLGRO  </h1>
               
              </div>

              {/* Navigation Links */}
              <div className="hidden  lg:flex  gap-14">
                {menues.map((menu) => (
                  <div key={menu.id}>
                    <Link
                      className="hover:border-b-2 cursor-pointer   hover:transition ease-in-out duration-300   border-primary"
                      
                      to={menu.path}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {menu.name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Secondary (icons) */}
              <div className="flex gap-6">
                <div className="hidden md:flex items-center gap-4">
                  <AlertDialoge />

                  <FaShoppingCart
                    size={35}
                    className="text-black hover:scale-110 hover:cursor-pointer border border-black p-2 rounded-full"
                  />
                  <FaSearch
                    size={35}
                    className="text-black hover:scale-110 hover:cursor-pointer border border-black p-2 rounded-full"
                  />
                </div>
                {/* Mobile navigation toggle */}
                <div className="lg:hidden flex items-center">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <IoMdMenu size={40} className="h-24" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div
            className={`fixed z-40 w-full px-4 bg-white overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}
          >
            <div className="px-4">
              <div className="flex flex-col pt-5 gap-8 font-bold tracking-wider">
                {menues.map((menu) => (
                  <div key={menu.id}>
                    <Link
                      className="hover:border-b-2  hover:transition ease-in-out duration-300   border-red-600"
                      activeClass="active"
                      to={menu.path}
                      spy={true}
                      smooth={true}
                      duration={500}
                      // onSetActive={handleSetActive}
                    >
                      {menu.name}
                    </Link>
                  </div>
                ))}
                {/* Mobile icons */}
                <div className="flex items-center gap-4">
                  <FaUser
                    size={35}
                    className="text-black hover:transition ease-in-out hover:scale-110 hover:cursor-pointer bg-gray-100 p-2 rounded-full"
                  />
                  <FaShoppingCart
                    size={35}
                    className="text-black hover:scale-110 hover:cursor-pointer bg-gray-100 p-2 rounded-full"
                  />
                  <FaSearch
                    size={35}
                    className="text-black hover:scale-110 hover:cursor-pointer bg-gray-100 p-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
