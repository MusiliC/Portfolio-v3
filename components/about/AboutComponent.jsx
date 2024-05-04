import styles from "@/style";
import Image from "next/image";
import React from "react";
import Musili from "public/cee.jpeg";
import Button from "../shared/Button";
import { roles, tools } from "@/constants";
import dev from "/public/icons/dev.svg";

import Link from "next/link";

const AboutComponent = () => {
  return (
    <>
      <section className={`${styles.paddingY} w-[80%] max-lg:w-5/6 mx-auto`}>
        {/* title */}
        <div className=" pb-12  max-lg:mb-10 gap-8 flex max-lg:flex-col">
          <div className="w-[60%] max-lg:w-[100%]">
            <div className=" mx-auto">
              <h2 className="headingTwoStart">About Me</h2>
              <p className="my-5 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                fugit voluptate, asperiores modi sit quidem molestias autem, aut
                quas dolorum iure consectetur libero itaque? Eveniet modi
                aperiam autem sapiente tempora. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aspernatur, voluptatibus?
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci itaque beatae qui recusandae saepe nam, explicabo sunt
                laudantium deleniti sed assumenda quisquam laboriosam
                consectetur dignissimos maxime officiis facilis eum consequatur.
              </p>
            </div>
            <div className="">
              <div>
                <p className="text-sm font-semibold">Latest roles</p>
                {roles?.map((role) => (
                  <div className="flex gap-1 my-5 items-center justify-between">
                    <div className="w-[50px]">
                      <Image
                        src={dev}
                        alt={`s/w`}
                        className="h-[35px] w-[35px]  object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{role.position}</p>
                      <p className=" text-sm">{role.company}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{role.period}</p>
                    </div>
                  </div>
                ))}
                {/* roles */}
              </div>
            </div>
          </div>

          {/* image */}
          <div className="w-[40%] max-lg:w-[100%]">
            <div className="bg-gray-50 shadow-md py-10 w-full mx-auto flex gap-6 flex-col justify-center items-center rounded-lg h-full">
              <Image
                src={Musili}
                alt="Musili"
                className="rounded-full h-[250px] w-[250px] object-cover"
              />
              <div className="text-center">
                <p className="font-semibold text-lg">Brian Musili</p>
                <p className="font-semibold">Software/Web developer</p>
              </div>
              <div className="flex">
                <Link href="Musili_Resume.pdf" rel="noopener noreferrer">
                  <Button text="Download Resume" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skills and experience */}
      <section className={`py-10 pb-20 bg-gray-50`}>
        <div className="w-5/6 mx-auto">
          <h1 className=" font-semibold font-poppins text-center md:text-[35px] text-[23px] md:leading-[50px] leading-[32px]">
            Skills & Experience
          </h1>
          <p className={`${styles.paragraph} pt-1 pb-3 text-center`}>
            Some of the skills and experience as I continue learning:
          </p>
        </div>
        <div
          className={`${styles.paddingY} flex flex-col gap-5 items-center md:flex-row w-5/6 md:w-[90%] mx-auto`}
        >
          {/* stack tech */}
          <div
            className={`${styles.paddingY} w-full md:w-5/6 mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5`}
          >
            {tools.map((tool) => (
              <div key={tool.name} className="flex  items-center flex-col">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  className="h-[40px] w-[40px]  object-cover"
                />
                <p className={`${styles.paragraph}`}>{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
