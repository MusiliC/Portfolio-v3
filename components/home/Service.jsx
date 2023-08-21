import styles from "@/style";
import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import { services } from "@/constants";
import Image from "next/image";

const Service = () => {
  return (
    <section
      className={`${styles.paddingY} min-h-[50vh] lg:min-h-[80vh] bg-secondary-500`}
    >
      <div className="w-5/6 mx-auto md:px-16 lg:px-0 py-10 flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-20 ">
        {/* section one */}
        <div className="flex-1 flex flex-col gap-7 lg:w-5/6">
          <h1 className=" font-semibold font-poppins md:text-[65px] text-[35px] md:leading-[80px] leading-[52px]">
            Services I <br /> Offer
          </h1>

          {/*  */}
          <p className={`${styles.paragraph} text-justify`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis
            doloribus et perferendis iure laboriosam, incidunt sint distinctio
            totam tempora mollitia, dignissimos iste voluptatem quisquam?
            Provident unde quis tempora reprehenderit.
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
                <h1 className="font-semibold font-poppins md:text-[20px] text-[18px] ">
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
