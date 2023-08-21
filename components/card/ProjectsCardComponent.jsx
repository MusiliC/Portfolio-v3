import styles from "@/style";
import Image from "next/image";
import React from "react";

const ProjectsCardComponent = ({ title, image }) => {
  return (
    <div
      className={`w-[320px] relative h-[400px] border-[3px] rounded-md border-[#3f3r45] `}
    >
      <div className=" w-full h-full">
        <Image
          src={image}
          alt="image"
          className="h-full w-full object-cover  "
        />
      </div>

      <div className="absolute top-[330px] right-[20px] p-3 rounded-md bg-secondary-500">
        <h2 className={`${styles.paragraph} font-semibold`}>{title}</h2>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;
