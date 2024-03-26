"use client";

import { homeSkills } from "@/constants";
import Image from "next/image";
import React from "react";

const Me = () => {
  return (
    <section className=" flex justify-center items-center bg-gray-700 py-5">
      <div className="w-5/6 mx-auto">
        <div className="flex  flex-wrap gap-5 justify-between">
          {homeSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex  justify-center items-center gap-3"
            >
              <div>
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  className="lg:h-[23px] h-[17px] w-[17px]  lg:w-[23px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-white text-[15px] lg:uppercase font-semibold">
                  {skill.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Me;
