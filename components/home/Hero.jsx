import React from "react";
import styles from "@/style";
import Image from "next/image";
import hero from "public/hero.svg";
import Button from "../shared/Button";
import Link from "next/link";

import github from "public/github1.svg";
import linkedin from "public/linkedin1.svg";

const Hero = () => {
  return (
    <section className="w-5/6  mx-auto">
      <div
        className={`flex flex-row max-lg:flex-col lg:items-center gap-16 lg:gap-10 ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 `}
        >
          <div className="">
            <h1 className=" font-bold font-poppins md:text-[62px] text-[32px] md:leading-[80px] leading-[52px]">
              Hello, <br /> I'm Musili
            </h1>

            <p className={`text-[17px] leading-[32px] pt-[8px] lg:w-[95%]`}>
              I engineer software solutions, create seamless web experiences,
              optimize operations, and refine designs for efficiency located in{" "}
              <span className="font-semibold">Nairobi, Kenya.</span>
            </p>
          </div>

          <br />

          {/* CTA */}

          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-start md:items-center  lg:mt-4">
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
