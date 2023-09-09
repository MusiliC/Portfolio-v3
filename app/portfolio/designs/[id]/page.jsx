"use client";
import React from "react";
import { useParams } from "next/navigation";
import { designProjects } from "@/constants";
import Image from "next/image";

const EachDesign = () => {
  const params = useParams();

  const myDesign = designProjects.find(
    (project) => project.id === parseInt(params.id)
  );

  return (
    <section className="min-h-[70vh] pt-14 md:pt-20 lg:min-h-[85vh]">
      <div className="h-full w-5/6 mx-auto ">
        {/* main body container */}
        <div className="flex flex-col gap-5">
          {/* heading */}
          <div>
            <h1 className=" font-semibold font-poppins  md:text-[25px] text-[18px] md:leading-[30px] leading-[15px]">
              {myDesign.name}
            </h1>
          </div>

          {/* images */}
          <div className="grid grid-cols-2 rounded-md md:grid-cols-3 py-5 px-3 lg:px-5 justify-around gap-5 lg:gap-10 bg-secondary-500 ">
            {myDesign &&
              myDesign.imageArray.map((imageDesign, i) => (
                <div className="w-full  " key={i}>
                  <Image
                    src={imageDesign}
                    alt="image design"
                    className=" object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EachDesign;
