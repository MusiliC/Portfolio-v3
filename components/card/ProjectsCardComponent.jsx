import styles from "@/style";
import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

const ProjectsCardComponent = ({ title, image }) => {
  return (
    <div
      className={`w-[320px] relative h-[350px] md:h-[400px] border-[3px] rounded-md border-[#3f3r45] `}
    >
      <div className=" w-full h-full">
        <Image
          src={image}
          alt="image"
          className="h-full w-full  transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
        />
      </div>

      {/* <div className="absolute top-[330px] right-[20px] p-3 rounded-md bg-secondary-500">
        <h2 className={`${styles.paragraph} font-semibold`}>{title}</h2>
      </div> */}

      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-secondary-500 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
          <p className="font-semibold font-poppins  md:text-[25px] text-[18px] md:leading-[30px] leading-[15px]">
            {" "}
            {title}
          </p>
        </div>
      </div>
      <div className="flex mt-4">
        <Button text={title} />
      </div>
    </div>
  );
};

export default ProjectsCardComponent;
