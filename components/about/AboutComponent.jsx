import styles from "@/style";
import Image from "next/image";
import React from "react";
import Musili from "public/try.png";
import Button from "../shared/Button";
import { tools } from "@/constants";

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
          <Image src={Musili} alt="Musili" className="rounded-full" />
          <div>
            <Button text="Resume" />
          </div>
        </div>

        {/* about me */}
        <div className={`${styles.paddingY} md:w-5/6 lg:w-2/3  mx-auto`}>
          <p className={`${styles.paragraph} `}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            similique sunt numquam temporibus amet, reiciendis fugit rerum quia
            placeat eos magnam eius vitae corporis aliquam commodi ut
            dignissimos aspernatur magni? Nisi velit veniam dicta neque culpa
            alias numquam, assumenda mollitia provident, cum facere incidunt
            voluptatibus reprehenderit labore perferendis fuga veritatis! Lorem
          </p>
          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero hic
            maxime, assumenda cupiditate odio quas dolores eius corporis,
            suscipit in similique dolore possimus praesentium, odit ullam! Dolor
            nihil cupiditate odit perspiciatis dolore eligendi voluptatibus
            omnis, similique explicabo enim consequatur quibusdam ab labore
            ullam, inventore vero deleniti nisi voluptatum recusandae? Sunt.
          </p>
        </div>
      </section>

      {/* skills and experience */}
      <section className={`${styles.paddingY}  bg-secondary-500`}>
        <div
          className={`${styles.paddingY} flex flex-col gap-5 items-center md:flex-row w-5/6 mx-auto`}
        >
          {/* stack tech */}
          <div
            className={`${styles.paddingY} flex-1 grid grid-cols-3 lg:grid-cols-4 justify-between  gap-5`}
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
          <div className="flex-1"></div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
