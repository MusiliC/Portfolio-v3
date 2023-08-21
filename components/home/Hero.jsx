import React from "react";
import styles from "@/style";

const Hero = () => {
  return (
    <section className="w-5/6 mx-auto">
      <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        {/* words section */}

        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}
        >
          <div className="py-[6px] px-[4px] mb-2">
            <p className={`font-semibold tracking-wider text-[20px]`}>
              Hello I am
            </p>
          </div>

     

          {/* name */}

          <div className="">
            <h1 className=" font-bold font-poppins md:text-[72px] text-[52px] md:leading-[100px] leading-[72px]">
              Brian Musili
            </h1>

            <br />

            <h1 className=" font-semibold font-poppins md:text-[32px] text-[22px] md:leading-[50px] leading-[32px]">
              Full Stack developer || <br />{" "}
              <span className="text-secondary-100">UX Designer</span>
            </h1>
          </div>


          {/* CTA */}

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
