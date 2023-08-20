"use client";
import React,{useState} from "react";
import { navLinks } from "@/constants";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {

   const [toggle, setToggle] = useState(false);

  return (
    <section className="w-5/6 mx-auto">
      <nav className="flex items-center justify-between w-full py-6">
        {/* logo */}
        <div>kk</div>

        {/* links */}
        <div>
          <ul className="items-center justify-end flex-1  hidden list-none sm:flex">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                  i === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button text={"Contact Me"} />
          </Link>
        </div>

        {/* mobile */}

        <div className="flex justify-end flex-1 md:hidden">
          {/* menu button */}

          <div>menu</div>

       
          {/* menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-secondary-100  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className="flex flex-col items-center justify-end flex-1 list-none">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
                    i === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
