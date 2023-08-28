import styles from "@/style";
import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import { services } from "@/constants";
import Image from "next/image";

const Service = () => {
  return (
    <section className={`${styles.paddingY} min-h-[50vh] lg:min-h-[80vh] `}>
      <div className="w-5/6 mx-auto md:px-16 lg:px-0 py-10 lg:py-16 flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-20 ">
        {/* section one */}
        <div className="flex-1 flex flex-col gap-7 lg:w-5/6">
          <h1 className=" font-semibold font-poppins md:text-[55px] text-[25px] md:leading-[70px] leading-[42px]">
            Services I <br /> Offer
          </h1>

          {/*  */}
          <p className={`${styles.paragraph} text-justify`}>
            I provide comprehensive web and mobile app development services,
            specializing in responsive web design and user-centric UX design.
            With a focus on software development, I create innovative and
            seamless solutions that cater to user needs while delivering
            exceptional functionality and aesthetics.
          </p>

          {/* projects */}
          <div className="flex mt-2">
            <Link href="/portfolio">
              <Button text="Projects" />
            </Link>
          </div>
        </div>

        {/* services section */}

        <div className="flex-1 flex flex-col gap-5 ">
          {services.map((service) => (
            <div
              key={service.title}
              className=" h-[120px] border-[1px] border-[#3f3r45] rounded-md px-4 flex items-center"
            >
              <div className="flex items-center gap-2 ">
                <div>
                  <Image
                    src={service.icon}
                    className="md:h-[27px] h-[25px] w-[25px] object-cover md:w-[27px]"
                    alt="approve"
                  />
                </div>
                <h1 className="font-semibold font-poppins md:text-[18px] text-[16px] ">
                  {service.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
