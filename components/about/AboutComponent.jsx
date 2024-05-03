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
      <section className={`${styles.paddingY} w-5/6 mx-auto`}>
        {/* title */}

        <div className="grid max-lg:grid-cols-1 grid-cols-2 my-10 gap-5 min-h-[70vh]">
          {/* outer container */}
          {/* image card */}

          <div
            className={`max-lg:row-span-1  row-span-2 max-lg:w-full w-[80%] mx-auto  `}
          >
            <div className="bg-gray-50 shadow-md py-10 w-full flex gap-6 flex-col justify-center items-center rounded-lg h-full">
              <Image
                src={Musili}
                alt="Musili"
                className="rounded-full h-[200px] w-[200px] object-cover"
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

          {/* about part */}
          <div className="bg-gray-50 shadow-md rounded-lg p-5">
            {/* <div>
              <h2 className="text-xl font-bold">About Me</h2>
            </div> */}
            <div className="mt-2 text-sm">
              <h2 className="mb-4 text-2xl text-start font-bold">About Me</h2>

              <p>
                My name is Brian Musili a software/web developer from Nairobi,
                Kenya.
              </p>

              <br />

              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veniam, quos, asperiores atque fugit velit sed, voluptatem sint
                architecto nisi similique laborum necessitatibus a temporibus
                est tempora placeat iure voluptate minima ut? Sunt aperiam et
                tempora ut eligendi expedita deserunt ea temporibus corrupti
                laudantium saepe, exercitationem odit quidem dignissimos quas
                incidunt?
              </p>
            </div>
          </div>

          <div className=" bg-gray-50 shadow-md  rounded-lg p-5">
            <div>
              <p className="text-sm font-semibold">Latest roles</p>
              {roles?.map((role) => (
                <div className="flex gap-1 my-4 items-center justify-between">
                  <div className="w-[50px]">
                    <Image
                      src={dev}
                      alt={`s/w`}
                      className="h-[40px] w-[40px]  object-cover"
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
