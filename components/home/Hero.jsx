import React from "react";
import styles from "@/style";
import Image from "next/image";
import hero from "public/hero.svg";
import Button from "../shared/Button";
import Link from "next/link";

import github from "public/github1.svg"
import linkedin from "public/linkedin1.svg"


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
            <h1 className=" font-bold font-poppins md:text-[62px] text-[32px] md:leading-[80px] leading-[52px]">
              Brian Musili
            </h1>

            <h1 className=" font-semibold font-poppins md:text-[22px] text-[15px] md:leading-[40px] leading-[22px]">
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
                <div className="homeCTA">
                  <div>Linkedin </div>
                  <div>|</div>
                  <div>
                    <Image
                      src={linkedin}
                      className="text-white h-[20px] w-[26px]"
                      alt="Git"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <Link
              href="https://github.com/MusiliC"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="homeCTA">
                <div>Github </div>
                <div>|</div>
                <div>
                  <Image
                    src={github}
                    className="text-white h-[20px] w-[26px]"
                    alt="Git"
                  />
                </div>
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
