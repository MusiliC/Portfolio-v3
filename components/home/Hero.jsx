import React from "react";
import styles from "@/style";
import Image from "next/image";
import hero from "public/hero.svg";
import Button from "../shared/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-5/6 mx-auto">
      <div
        className={`flex lg:flex-row flex-col lg:items-center gap-16 lg:gap-10 ${styles.paddingY}`}
      >
        {/* words section */}

        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 `}
        >
          <div className="py-[6px] px-[4px] ">
            <p className={` tracking-wider text-[20px]`}>Hello I am</p>
          </div>

          {/* name */}

          <div className="">
            <h1 className=" font-bold font-poppins md:text-[72px] text-[42px] md:leading-[100px] leading-[72px]">
              Brian Musili
            </h1>

            <h1 className=" font-semibold font-poppins md:text-[27px] text-[18px] md:leading-[50px] leading-[32px]">
              Full Stack developer || <br />{" "}
              <span className="text-secondary-100">UX Designer</span>
            </h1>
          </div>

          <br />

          {/* CTA */}

          <div className="flex gap-8 items-center  lg:mt-4">
            <div>
              <Link
                href="https://www.linkedin.com/in/brian-musili-405b1220a/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button text="Linkedin" />
              </Link>
            </div>
            <Link
              href="https://github.com/MusiliC"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div>
                <Button text="Github" />
              </div>
            </Link>
          </div>
        </div>

        {/* image section */}

        <div className="flex-1 md:px-16 lg:px-0">
          {/* <Image src ={video} alt="video" /> */}
          <Image src={hero} alt="home" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
