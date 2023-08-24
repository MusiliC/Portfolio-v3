import React from "react";
import aboutImage from "/public/5.jpg";
import Image from "next/image";

const Header = ({title}) => {
  return (
    <div className=" relative w-full  bg-gradient-to-br from-primary-500 to-secondary-500  h-[300px]">
      <Image
        src={aboutImage}
        className="h-full w-full opacity-[70%] grayscale-[60%] mix-blend-overlay object-cover"
        alt="about"
      />

      <div className="  px-6 py-2 absolute bottom-[100px] rounded-lg left-[30px] md:left-[60px] lg:left-[220px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-widest">
          {title}
        </p>
     
      </div>
    </div>
  );
};

export default Header;
