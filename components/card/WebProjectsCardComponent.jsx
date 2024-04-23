import styles from "@/style";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import webIcon from "public/webIcon.png";
import github2 from "public/github2.png";

const WebProjectsCardComponent = ({ name, link, image, github, desc }) => {
  return (
    <div className="w-5/6  mx-auto  hover:bg-gray-50 cursor-pointer  rounded-md ">
      <div>
        <Image src={image} alt={name} className="h-[180px] w-full " />
      </div>
      <div className={`pt-5 flex flex-col gap-2`}>
        <h2 className=" font-semibold font-poppins  leading-[15px]">
          {name}
        </h2>
        
        <div className="flex mt-2 gap-5 items-center">
          <Link href={`${link}`} rel="noopener noreferrer" target="_blank">
            <div className="flex items-center gap-1">
              <Image src={webIcon} alt="View" className="h-[18px] w-[18px]" />
              <p className={`underline text-secondary-100 ${styles.paragraph}`}>
                View
              </p>
            </div>
          </Link>
          <Link href={`${github}`} rel="noopener noreferrer" target="_blank">
            <div className="flex items-center gap-1">
              <Image src={github2} alt="Github" className="h-[18px] w-[18px]" />
              <p className={`underline text-secondary-100 ${styles.paragraph}`}>
                Github
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebProjectsCardComponent;
