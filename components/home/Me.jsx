import styles from "@/style";
import React from "react";
import Button from "../shared/Button";
import Image from "next/image";
import musili from "public/try.png";
import Link from "next/link";

const Me = () => {
  return (
    <section className="w-5/6 mx-auto min-h-[50vh] lg:min-h-[65vh] flex items-center py-10">
      <div
        className={`flex lg:flex-row  flex-col-reverse lg:items-center gap-16 lg:gap-10 ${styles.paddingY}`}
      >
        {/* image */}
        <div className="flex-1 md:px-16 lg:px-0 mx-auto ">
          <Image src={musili} className="rounded-full" alt="musili" />
        </div>

        {/* about */}
        <div className="flex-1 ">
          <div className="md:px-16 mx-auto lg:px-0 lg:w-5/6 flex gap-4 flex-col">
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
              <Button text="Resume" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
