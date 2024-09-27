"use client";
import React, { useState } from "react";
import { navLinks } from "@/constants";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import menu from "public/menu.svg";
import close from "public/close.svg";
import { usePathname } from "next/navigation";
import codeLogo from "public/icons/code.png";

const Navbar = () => {
  const activeLink = usePathname();

  const [toggle, setToggle] = useState(false);

  return (
    <section className=" fixed top-0 z-30 bg-secondary-500   w-full ">
      <div className="w-5/6 mx-auto py-2">
        <nav className="flex items-center justify-between w-full py-4">
          {/* logo */}
          <div>
            <Link href="/">
            <Image src={codeLogo} alt="Cee" className=" h-[25px] w-[25px]" />
            </Link>
          </div>

          {/* links */}
          <div>
            <ul className="items-center justify-end flex-1  hidden list-none md:flex">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 lg:mr-10`}
                >
                  <Link
                    href={`${nav.id}`}
                    className={`${
                      activeLink === nav.id
                        ? "border-b-[3px] border-primary-100 text-sm"
                        : "text-sm"
                    } `}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
              {/* contact */}
              <li className="hidden md:flex">
                <Link href="/contact">
                  <Button text={"Contact Me"} />
                </Link>
              </li>
            </ul>
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
              } p-6 bg-secondary-100  absolute z-30 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
            >
              <ul className="flex flex-col items-center justify-end flex-1 list-none">
                {navLinks.map((nav, i) => (
                  <div key={nav.id}>
                    <li
                      className={`font-poppins font-normal tracking-wide cursor-pointer text-[16px] text-white mb-4`}
                      onClick={() => setToggle(false)}
                    >
                      <Link
                        href={`${nav.id}`}
                        className={`${
                          activeLink === nav.id
                            ? "border-b-[3px] border-white"
                            : ""
                        } `}
                      >
                        {nav.title}
                      </Link>
                    </li>
                  </div>
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
      </div>
    </section>
  );
};

export default Navbar;
