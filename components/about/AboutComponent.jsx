import styles from "@/style";
import Image from "next/image";
import React from "react";
import Musili from "public/try.png";
import Button from "../shared/Button";
import { tools } from "@/constants";
import Experience from "./Experience";
import Link from "next/link";

const AboutComponent = () => {
  return (
    <>
      <section className={`${styles.paddingY} w-5/6 mx-auto`}>
        {/* title */}
        <div
          className={`${styles.flexCenter} flex-col gap-3 md:w-5/6 lg:w-2/3  mx-auto`}
        >
          <div>
            <h1 className=" font-semibold font-poppins text-center md:text-[35px] text-[23px] md:leading-[50px] leading-[32px]">
              Full stack Developer <br /> UX Designer
            </h1>
          </div>

          {/*  */}
          <div>
            <p className={`${styles.paragraph} text-center`}>
              I am passionate about coming up with great web/software solutions
              and building beautiful, clean experiences for my users
            </p>
          </div>
        </div>

        {/* image */}
        <div className={`${styles.flexCenter} flex-col gap-5 mt-12 my-10`}>
          <Image
            src={Musili}
            alt="Musili"
            className="rounded-full h-[320px] w-[320px] object-cover"
          />
          <div>
            <Link href="Musili_Resume.pdf" rel="noopener noreferrer">
              <Button text="Resume" />
            </Link>
          </div>
        </div>

        {/* about me */}
        <div className={`${styles.paddingY} md:w-5/6 lg:w-2/3  mx-auto`}>
          <p className={`${styles.paragraph} `}>
            My name is Brian Musili a full stack developer/UX designer from
            Nairobi, Kenya. I completed my studies at Dedan Kimathi University
            of Technology where I pursued a degree in computer science. I
            immersed myself in web development field, focusing Javascript as my
            primary tool of programming. With experience in React JS and Next JS
            I leverage to build robust and responsive front-end interfaces and
            complementing my projects with Node JS on the backend
          </p>
          <br />

          <p>
            Driven by my passion for creating stunning interfaces, I enrolled in
            a UX Design course on Coursera. This decision was motivated by my
            desire to enhance my frontend skills, focusing on crafting
            exceptional user experiences. My commitment to user-centered design
            ensures that every interface I create looks gorgeous resulting in
            memorable and enjoyable digital interactions.
          </p>
        </div>
      </section>

      {/* skills and experience */}
      <section className={`${styles.paddingY}  bg-secondary-500`}>
        <div className="w-5/6 mx-auto">
          <h1 className=" font-semibold font-poppins text-center md:text-[35px] text-[23px] md:leading-[50px] leading-[32px]">
            Skills & Experience
          </h1>
          <p className={`${styles.paragraph} py-1 text-center`}>
            Some of the skills and experience as I continue learning:
          </p>
        </div>
        <div
          className={`${styles.paddingY} flex flex-col gap-5 items-center md:flex-row w-5/6 md:w-[90%] mx-auto`}
        >
          {/* stack tech */}
          <div
            className={`${styles.paddingY} w-full md:w-[50%] lg:w-[40%] grid grid-cols-3 lg:grid-cols-4 justify-between  gap-5`}
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

          {/* experience level */}
          <div className="w-full md:w-[50%]  mx-auto  lg:h-[400px]">
            <Experience />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
