import React from "react";
import styles from "@/style";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-primary-100">
      <section className={`${styles.flexCenter}  pt-4 w-5/6 mx-auto `}>
        <div
          className={`${styles.flexStart} gap-6 md:flex-row flex-col mb-8 w-full`}
        >
          {/* phone number and email */}
          <div className="flex flex-col  justify-start flex-1 mr-10 ">
            <p className={`${styles.paragraph} mt-4 text-white max-w-[310px]`}>
              MUSILI
            </p>
            <p className={`${styles.paragraph} mt-2 text-white max-w-[310px]`}>
              +254 768687334
            </p>
            <p className={`${styles.paragraph} mt-2 text-white max-w-[310px]`}>
              musilibrian07@gmail.com
            </p>
          </div>

          {/* section 2 - links */}

          <div className="flex-[1.5]  w-full flex flex-row justify-between flex-wrap md:mt-0 mt:10">
            {footerLinks.map((link) => (
              <div
                key={link.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4
                  className={`${styles.paragraph} text-white`}
                >
                  {link.title}
                </h4>
                <ul className="mt-4">
                  {link.links.map((eachLink) => (
                    <Link href={eachLink.link}>
                      <li
                        key={eachLink.name}
                        className={`${styles.paragraph} py-1 text-white`}
                      >
                        {eachLink.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bottom section */}
      {/* Last part copyright */}
      <div className="flex pb-6 flex-col md:flex-row items-center justify-between w-full pt-0 md:flex-6  border-t-[1px] border-t-[#3f3r45]">
        <div className="w-5/6 mx-auto">
          <p
            className={`${styles.paragraph} text-center pt-3 text-white`}
          >
            @2023 Musili. Made from scratch. All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
