import Image from "next/image";
import Link from "next/link";
import React from "react";

const OneBlog = ({ title, desc, image, url, category }) => {
  return (
    <div className="w-full  mx-auto  hover:bg-gray-50 cursor-pointer  rounded-md ">
      <Link  href={url} rel="noopener noreferrer" target="_blank">
      <div>
        <Image src={image} alt={title} className="h-[180px] rounded-sm w-full " />
      </div>
      <hr className="my-2 font-bold" />
      <div className={` flex flex-col gap-2 p-1`}>
        <p className="text-sm italic">category: {category}</p>
        <h2 className="py-1 font-semibold font-poppins  leading-[15px]">
          {title}
        </h2>
        <p className="text-sm">{desc}</p>
        <p className="text-small italic underline">Read more</p>
      </div>
      </Link>
    </div>
  );
};

export default OneBlog;
