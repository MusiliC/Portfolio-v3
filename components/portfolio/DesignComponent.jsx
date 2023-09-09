import { designProjects } from "@/constants";
import styles from "@/style";
import React from "react";
import DesignCard from "../card/DesignCard";

const DesignComponent = () => {
  return (
    <section className={`${styles.paddingY}  w-5/6 mx-auto`}>
      <div className={`${styles.paddingY} grid lg:grid-cols-2 gap-10`}>
        {designProjects.map((project) => (
          <div key={project.name} className="border-b border-gray-400 lg:border-none rounded-sm">
            <DesignCard
              name={project.name}
              image={project.image}
              desc={project.desc}
              id={project.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignComponent;
