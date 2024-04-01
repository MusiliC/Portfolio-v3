import styles from "@/style";
import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import { services } from "@/constants";
import Image from "next/image";
import ServiceCard from "../shared/ServiceCard";

const Service = () => {
  return (
    <section className={`${styles.paddingY} min-h-[50vh] lg:min-h-[80vh] `}>
      <div className="w-5/6 mx-auto md:px-16 lg:px-0 py-10">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-center headingTwo">What I do</h2>
          <p className="my-2.5 text-center">
            I specialize in software development and web design, integrating
            DevOps practices to ensure efficient operations. With a focus on
            user experience design, I craft intuitive interfaces for seamless
            digital experiences across various platforms.
          </p>
        </div>
        <div className="py-6 md:py-10 gap-6 flex lg:flex-row flex-col items-center flex-wrap justify-between">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
