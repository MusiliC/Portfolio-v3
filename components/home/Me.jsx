""
import styles from "@/style";
import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

const Me = () => {
  return (
    <section className=" flex justify-center items-center bg-primary-500 py-7">
      <div className={` gap-16 lg:gap-10 ${styles.paddingY}`}>
        <div className="w-5/6 lg:w-[70%] mx-auto">
          <div className="md:px-16 mx-auto lg:px-0 lg:w-5/6 flex gap-2  lg:items-center flex-col">
            {/* text */}
            <div>
              <p className={`${styles.paragraph} text-justify`}>
                I am a full stack developer and UX Designer located in Nairobi,
                Kenya. I am passionate about building beautiful and clean
                experiences for my users merged with their functionalities.
              </p>
            </div>

            {/* link read more */}
            <div>
              <p
                className={`${styles.paragraph} font-semibold tracking-wider underline cursor-pointer `}
              >
                {" "}
                <Link href="/about">Read More</Link>{" "}
              </p>
            </div>

            {/* resume */}
            <div className="mt-4 flex">
              <Link href="Musili_Resume.pdf" rel="noopener noreferrer">
                <Button text="Resume" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
