import React from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import pic from "./logo.png";

// Small NavBar
function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between w-full ">
        <div>
          <h3 className="test-xl font-bold">It all starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Nanded Wazi <BiChevronDown />
          </span>
        </div>
        <div className="text-white w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

// Medium NavBar
function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-3">
        <div className="w-10 h-10">
          <img src={pic} alt="logo" className="w-full h-full" />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md ">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}

//LargeNavBar
function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-14 h-14">
            <img src={pic} alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md ">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search from Movies, Events, Plays, Spoets and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cousor-pointer hover:text-white ">
            Nanded WAS <BiChevronDown className="w-5 h-5" />
          </span>
          <button className="bg-red-600 text-white px-2 py-2 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const NavBar = () => {
  return (
    <nav className="bg-darkBackground2-700 px-4 py-3">
      {/* Mobile Screen NavBar  */}
      <div className="flex md:hidden lg:hidden">
        <NavSm />
      </div>
      {/* Medium/Tab Screen NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* large/Desktop Screen NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default NavBar;
