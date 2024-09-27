"use client"
import styles from "@/style";
import Image from "next/image";
import React from "react";
import Musili from "public/cee.jpeg";
import Button from "../shared/Button";
import { roles, tools } from "@/constants";
import dev from "/public/icons/dev.svg";

import Link from "next/link";
import ContactInformation from "../shared/ContactInformation";

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
                I am Brian Musili. I graduated with a bachelor's degree in
                Computer Science from Dedan Kimathi University Of technology
                where I laid the foundation for my career in
                technology.
                <br /><br /> I'm currently a Software Developer working with
                Java, Javascript, Jakarta EE, Spring boot, Sencha extjs,
                ReactJs, NodeJs, relational & non-relational databases which gives me 
                a solid understanding of both frontend and backend.
                <br />
                <br />
                I embrace the principles of DevOps and Microservices, seamlessly integrating development and operations to streamline processes. As a mentor and team player, I'm dedicated to empowering others and building strong, cohesive teams.
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
                <p className="font-semibold">Software developer</p>
              </div>
              <div className="flex">
                <Link href="Musili_Resume.pdf" rel="noopener noreferrer">
                  <Button text="Download Resume" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ContactInformation/>
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
