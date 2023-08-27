import styles from '@/style';
import React from 'react'

const Experience = () => {
  return (
    <div className="lg:flex w-full  h-[90%] my-auto gap-5">
      <div className="flex-1  flex flex-col justify-start gap-6 lg:gap-10 lg:py-6">
        {/* item */}
        <div>
          <p className={`${styles.paragraph}`}>Javascript</p>
          <div className="progressContainer">
            <div className="progressBar" style={{ width: "80%" }}>
              <p>80%</p>
            </div>
          </div>
        </div>
        {/* item */}
        <div>
          <p className={`${styles.paragraph}`}>React JS</p>
          <div className="progressContainer">
            <div className="progressBar" style={{ width: "90%" }}>
              <p>90%</p>
            </div>
          </div>

          {/*  */}
        </div>
        {/*  */}
        {/* item */}
        <div className="">
          <p className={`${styles.paragraph}`}>Node JS</p>
          <div className="progressContainer">
            <div className="progressBar" style={{ width: "70%" }}>
              <p>70%</p>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="experienceItem">
          <p className={`${styles.paragraph}`}>Java</p>
          <div className="progressContainer">
            <div className="progressBar" style={{ width: "50%" }}>
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1  flex flex-col justify-start gap-6 lg:gap-10 py-6">
        {/* item */}
        <div className="">
          <p className={`${styles.paragraph}`}>CSS(Tailwind CSS)</p>
          <div className="progressContainer">
            <div className="progressBar" style={{ width: "90%" }}>
              <p>90%</p>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        {/* item */}

        {/*  */}
        {/* item */}
        <div className="">
          <p className={`${styles.paragraph}`}>Git</p>
          <div className="progressContainer">
            <div className="progressBar" style={{ width: "70%" }}>
              <p>70%</p>
            </div>
          </div>

          {/*  */}
        </div>
        {/*  */}
        {/* item */}
        <div className="">
          <p className={`${styles.paragraph}`}>UX Design</p>
          <div className="progressContainer">
            <div className="progressBar" style={{ width: "70%" }}>
              <p>70%</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Experience