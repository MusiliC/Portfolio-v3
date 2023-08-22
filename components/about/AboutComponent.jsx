import styles from "@/style";
import Image from "next/image";
import React from "react";
import Musili from "public/try.png"
import Button from "../shared/Button";

const AboutComponent = () => {
  return (
    <section className={`${styles.paddingY} w-5/6 mx-auto`}>
      {/* title */}
      <div className={`${styles.flexCenter} flex-col gap-3 md:w-5/6 lg:w-2/3  mx-auto`}>
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
      <div className={`${styles.flexCenter} flex-col gap-5 my-10`}>
        <Image src={Musili} alt="Musili" className="rounded-full" />
        <div>
            <Button text="Resume" />
        </div>
      </div>

      {/* about me */}
      <div></div>

      {/* experience */}
      <div></div>

      {/* technologies used */}
      <div></div>
    </section>
  );
};

export default AboutComponent;
