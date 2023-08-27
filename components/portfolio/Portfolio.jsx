import React from "react";
import styles from "@/style";
import { projectCards } from "@/constants";
import ProjectsCardComponent from "../card/ProjectsCardComponent";
import Link from "next/link";

const PortfolioComponent = () => {
  return (
    <section className={`${styles.paddingY} `}>
      <div
        className={`${styles.paddingY} w-5/6 py-12 mx-auto flex gap-10 flex-col md:flex-row items-center hover:cursor-pointer`}
      >
        {projectCards.map((project) => (
          <>
            <Link key={project.title} href={`portfolio/${project.to}`}>
              <div className="">
                <ProjectsCardComponent
                  title={project.title}
                  image={project.image}
                />
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
};

export default PortfolioComponent;
