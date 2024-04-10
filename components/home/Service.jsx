import styles from "@/style";
import React from "react";
import { services } from "@/constants";
import ServiceCard from "../shared/ServiceCard";

const Service = () => {
  return (
    <section className={`${styles.paddingY}  `}>
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
        <div className="max-lg:py-6 py-10 gap-6 flex flex-row max-lg:flex-col items-center flex-wrap justify-between">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
