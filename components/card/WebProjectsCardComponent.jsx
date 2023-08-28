import styles from "@/style";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebProjectsCardComponent = ({ name, link, image }) => {
  return (
    <Link href={`${link}`} rel="noopener noreferrer" target="_blank">
      <div className="w-5/6 mx-auto border rounded-md border-gray-200">
        <div>
          <Image
            src={image}
            alt={name}
            className="h-[250px] w-full object-cover"
          />
        </div>
        <div className={`${styles.paddingY} px-2 flex flex-col gap-2`}>
          <h2 className=" font-semibold font-poppins  md:text-[18px] text-[15px] md:leading-[30px] leading-[15px]">
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default WebProjectsCardComponent;
