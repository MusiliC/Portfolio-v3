import React from "react";
import OneProject from "../shared/OneProject";
import { webProjects } from "@/constants";
import Button from "../shared/Button";
import Link from "next/link";

const HomeProjects = () => {
  return (
    <section className="bg-primary-two-100 py-10">
      <div className="screen">
      <div className="lg:w-3/4 mx-auto">
        <h2 className="text-center headingTwo">Recent Portfolio</h2>
        <p className="my-2 text-center">
          Some of the projects I have worked on, ready to provide the best
          services
        </p>
      </div>
      <div className="py-12 grid max-lg:grid-cols-1 justify-between gap-8 grid-cols-3">
        {webProjects.slice(0, 3).map((projects, i) => (
          <OneProject {...projects} key={i} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link href={"/projects"}>
          <Button text={"All projects"} />
        </Link>
      </div>
      </div>
    </section>
  );
};

export default HomeProjects;
