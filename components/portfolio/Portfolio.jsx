import React from "react";
import styles from "@/style";
import { projectCards } from "@/constants";
import ProjectsCardComponent from "../card/ProjectsCardComponent";

const PortfolioComponent = () => {
  return (
    <section className={`${styles.paddingY} `}>
      <div className={`${styles.paddingY} w-5/6 py-12 mx-auto flex gap-10 flex-col md:flex-row items-center hover:cursor-pointer`}>
        {projectCards.map((project) => (
          <>
            <div key={project.title} className="">
             
              <ProjectsCardComponent
                title={project.title}
                image={project.image}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default PortfolioComponent;
