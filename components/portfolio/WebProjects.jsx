import { webProjects } from "@/constants";
import styles from "@/style";
import React from "react";
import WebProjectsCardComponent from "../card/WebProjectsCardComponent";
import Image from "next/image";
import projectImage from "/public/images/p4.jpg";

const WebProjects = () => {
  return (
    <section className={`${styles.paddingY}  lg:w-5/6 mx-auto`}>
      {/* top part */}
      <div className="flex max-lg:flex-col gap-5 my-8 max-lg:my-2 justify-between p-10">
        <div className="w-[53%] max-lg:w-full">
          <Image
            src={projectImage}
            alt="portfolio"
            className="h-[270px] w-full object-cover"
          />
        </div>
        <div className="w-[40%] max-lg:w-full">
          <h2 className="w-3/4 max-lg:w-full headingTwoStart">
            Featured <br className="max-lg:hidden" /> Projects
          </h2>
          <p className="my-2 w-3/4 max-lg:w-full text-start">
            Featured projects in web and software development showcasing
            innovative solutions crafted with industrial best practices,
            ensuring scalability, security, and optimal performance .
          </p>
        </div>
      </div>
      {/* <div className="lg:w-3/4 py-5 mx-auto">
        <h2 className="text-center headingTwo">Featured Projects</h2>
        <p className="my-2 text-center">
          Some of the projects I have worked on, I offer best services and
          solutions
        </p>
      </div> */}
      <div
        className={`${styles.paddingY} grid md:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {webProjects.map((project) => (
          <div key={project.name}>
            <WebProjectsCardComponent
              name={project.name}
              image={project.image}
              desc={project.desc}
              link={project.link}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebProjects;
