"use client";

import Image from "next/image";
import MenuItem from "./MenuItem";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import NavInfo from "./NavInfo";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className="py-3 fixed w-full right-0 left-0 z-10 transition duration-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Image
          src="/img/logo.svg"
          width={60}
          height={60}
          alt="logo"
          className="cursor-pointer"
        />

        <div
          className={` ${
            navMobile
              ? "lg:hidden max-h-[280px] flex flex-col justify-center items-center shadow-xl fixed left-0 w-full h-full top-[80px] overflow-hidden transition-all"
              : "hidden lg:flex gap-x-6"
          } `}
        >
          <MenuItem label="Home" />
          <MenuItem label="Dogs" />
          <MenuItem label="Services" />
          <MenuItem label="Price" />
          <MenuItem label="Contact" />
        </div>

        {/* phone number */}
        <NavInfo />

        {/* navbar mobile button */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setNavMobile(!navMobile)}
        >
          <CgMenuRight className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
