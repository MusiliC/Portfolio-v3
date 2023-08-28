import styles from "@/style";
import Image from "next/image";
import React from "react";

const DesignCard = ({ name, desc, image }) => {
  return (
    <div className="lg:w-3/4 mx-auto">
      <div>
        <Image
          src={image}
          alt={name}
          className="h-[400px] w-full object-contain border border-gray-300 "
        />
      </div>
      <div className={`${styles.paddingY} flex flex-col gap-4`}>
        <h2 className=" font-semibold font-poppins  md:text-[30px] text-[20px] md:leading-[40px] leading-[25px]">
          {name}
        </h2>
        <p className={`${styles.paragraph} text-justify`}>{desc}</p>
      </div>
    </div>
  );
};

export default DesignCard;
