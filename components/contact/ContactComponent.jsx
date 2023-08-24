import styles from "@/style";
import Image from "next/image";
import React from "react";
import contact from "public/contact.jpg";
import Button from "../shared/Button";

const ContactComponent = () => {
  return (
    <section className={`${styles.paddingY} w-full `}>
      <div className={` w-5/6 mx-auto`}>
        {/* title header */}

        <div
          className={`${styles.paddingY}  bg-secondary-500 px-5 rounded-sm  lg:w-1/2 ml-auto`}
        >
          <h1 className=" font-bold font-poppins md:text-[72px] text-[42px] md:leading-[100px] leading-[60px]">
            Let's <br /> Connect
          </h1>
        </div>

        <div className={`${styles.paddingY} flex md:flex-row flex-col gap-10 lg:gap-2`}>
          {/* image */}
          <div className="flex-1">
            <Image src={contact} alt="musili" className="h-[500px] w-[400px]" />
          </div>

          {/* form */}
          <div className="flex-1">
            <form action="" className="w-full flex flex-col gap-4">
              <input type="text" className="formInput" placeholder="Name" />
              <input type="text" className="formInput" placeholder="Email" />
              <input type="text" className="formInput" placeholder="Subject" />
              <textarea
                name=""
                placeholder="Message Body"
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <div className="flex justify-start">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
