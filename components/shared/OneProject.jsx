import React from "react";
import Image from "next/image";
import githubIcon from "@/public/icons/gitTheme.png"
import linkIcon from "@/public/icons/linkTheme.png"

const OneProject = ({ image, name, github, link }) => {
  return (
    <div className="flex  justify-center items-start flex-col cursor-pointer">
      <div>
        <Image src={image} className="rounded" />
      </div>
      <div className="py-2 px-2">
        <p>{name}</p>
      </div>
      <div className="flex justify-between text-secondary-100 underline w-full px-2 pb-2 items-center">
        <a
          href={`${link}`}
          className="flex justify-center items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View <Image src={linkIcon} height={20} width={20} />
        </a>

        <a
          href={`${github}`}
          className="flex justify-center items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github <Image src={githubIcon} height={20} width={20} />
        </a>
      </div>
    </div>
  );
};

export default OneProject;
