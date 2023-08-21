"use client";
import React, { useState } from "react";
import { navLinks } from "@/constants";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import menu from "public/menu.svg";
import close from "public/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="w-5/6 mx-auto">
      <nav className="flex items-center justify-between w-full py-6">
        {/* logo */}
        <div>
          <p className="font-semibold tracking-wider text-[20px]">Musili</p>
        </div>

        {/* links */}
        <div>
          <ul className="items-center justify-end flex-1  hidden list-none md:flex">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                  i === navLinks.length - 1 ? "mr-0" : "mr-5 lg:mr-10"
                }`}
              >
                <Link href={`${nav.id}`}>{nav.title}</Link>
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

          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain "
            onClick={() => setToggle((prev) => !prev)}
          />

          {/* menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-secondary-100  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className="flex flex-col items-center justify-end flex-1 list-none">
              {navLinks.map((nav, i) => (
                <>
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
                    onClick={() => setToggle(false)}
                  >
                    <Link href={`${nav.id}`}>{nav.title}</Link>
                  </li>
                </>
              ))}
              <li
                onClick={() => setToggle(false)}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white "
              >
                <Link href={"/contact"}>Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;