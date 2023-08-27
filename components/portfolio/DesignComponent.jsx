import { designProjects } from "@/constants";
import styles from "@/style";
import React from "react";
import DesignCard from "../card/DesignCard";

const DesignComponent = () => {
  return (
    <section className={`${styles.paddingY}  w-5/6 mx-auto`}>
      <div className={`${styles.paddingY} grid md:grid-cols-2 gap-10`}>
        {designProjects.map((project) => (
          <div key={project.name}>
            <DesignCard
              name={project.name}
              image={project.image}
              desc={project.desc}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignComponent;
