import styles from "@/style";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesignCard = ({ id, name, desc, image }) => {
  return (
    <Link href={`designs/${id}`}>
      <div className="lg:w-3/4 mx-auto cursor-pointer relative">
        <div>
          <Image
            src={image}
            alt={name}
            className="h-[330px] w-full object-contain border hover:scale-105 border-gray-300 rounded-md transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
          />
        </div>
        <div className={`${styles.paddingY} flex flex-col `}>
          <h2 className=" font-semibold font-poppins  md:text-[25px] text-[18px] md:leading-[30px] leading-[15px]">
            {name}
          </h2>
          <p className={`${styles.paragraph} pt-1 text-justify`}>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default DesignCard;
