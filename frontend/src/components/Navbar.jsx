import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-center sm:justify-between py-5 font-medium">
        <Link to={"/"}>
          <img className="w-36" src={assets.logo} alt="logo-image" />
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink
            to={"/"}
            className="flex felx-col items-center gap-1 hover:text-primary"
          >
            <p className="uppercase">Home</p>
          </NavLink>
          <NavLink
            to={"/collection"}
            className="flex felx-col items-center gap-1 hover:text-primary"
          >
            <p className="uppercase">Collection</p>
          </NavLink>
          <NavLink
            to={"/about"}
            className="flex felx-col items-center gap-1 hover:text-primary"
          >
            <p className="uppercase">About</p>
          </NavLink>
          <NavLink
            to={"/contact"}
            className="flex felx-col items-center gap-1 hover:text-primary"
          >
            <p className="uppercase">Contact</p>
          </NavLink>
        </ul>

        <div className="items-center gap-6 hidden sm:flex">
          <img
            src={assets.search_icon}
            alt="search-icon"
            className="w-5 cursor-pointer"
          />
          <div className="group relative">
            <img
              src={assets.profile_icon}
              alt="profile-icon"
              className="w-5 cursor-pointer"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to={"/cart"} className="relative">
            <img
              src={assets.cart_icon}
              alt="cart-icon"
              className="w-5 min-w-5"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
        </div>
      </div>

      {/* absolute bottom-0 left-0 */}

      {/* mobile */}
      <div className="bg-gray-100 w-full py-5 fixed bottom-0 left-0 right-0 sm:hidden flex justify-around items-center z-[99]">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <Link to={"/"}>
            <img
              src={assets.profile_icon}
              alt="profile-icon"
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer"
        />
      </div>

      {/* sidebar menu  */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ease-in-out ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="p-5">
          <div
            className="flex items-center gap-4 py-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="back-icon"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>

          <ul className="flex flex-col gap-2 text-sm text-gray-700 pt-10">
            <NavLink
              onClick={() => setVisible(false)}
              to={"/"}
              className="flex felx-col items-center gap-1 border border-gray-200 rounded-md p-3 hover:text-primary"
            >
              <p className="uppercase">Home</p>
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/collection"}
              className="flex felx-col items-center gap-1 border border-gray-200 rounded-md p-3 hover:text-primary"
            >
              <p className="uppercase">Collection</p>
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/about"}
              className="flex felx-col items-center gap-1 border border-gray-200 rounded-md p-3 hover:text-primary"
            >
              <p className="uppercase">About</p>
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/contact"}
              className="flex felx-col items-center gap-1 border border-gray-200 rounded-md p-3 hover:text-primary"
            >
              <p className="uppercase">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
