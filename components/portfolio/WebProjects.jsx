import {  webProjects } from '@/constants';
import styles from '@/style';
import React from 'react'
import WebProjectsCardComponent from '../card/WebProjectsCardComponent';

const WebProjects = () => {
  return (
    <section className={`${styles.paddingY}  lg:w-5/6 mx-auto`}>
      <div className={`${styles.paddingY} grid md:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {webProjects.map((project) => (
          <div key={project.name}>
            <WebProjectsCardComponent
              name={project.name}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebProjects