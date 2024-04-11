"use client";
import React from "react";
import { useParams } from "next/navigation";
// import { designProjects } from "@/constants";
import Image from "next/image";

const EachDesign = () => {
  const params = useParams();

  const myDesign = designProjects.find(
    (project) => project.id === parseInt(params.id)
  );

  return (
    <section className="min-h-[70vh] pt-14 md:pt-20 lg:min-h-[85vh]">
      <div className="h-full w-5/6 mx-auto flex justify-center  items-center ">
       <h2  className='headingTwo' >Doing an update</h2>
      </div>
    </section>
  );
};

export default EachDesign;
