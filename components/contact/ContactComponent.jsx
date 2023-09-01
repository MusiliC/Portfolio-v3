import styles from "@/style";
import Image from "next/image";
import React from "react";
import contact from "public/contact.jpg";
import Button from "../shared/Button";
import { contactIcons } from "@/constants";

const ContactComponent = () => {
  return (
    <section className={`${styles.paddingY} w-full `}>
      <div className={` w-5/6 mx-auto`}>
        {/* title header */}

        <div
          className={`${styles.paddingY}  bg-secondary-500 px-5 rounded-sm  lg:w-1/2 ml-auto`}
        >
          <h1 className=" font-bold font-poppins md:text-[52px] text-[32px] md:leading-[70px] leading-[40px]">
            Let's <br /> Connect
          </h1>
        </div>

        <div
          className={`${styles.paddingY} flex md:flex-row flex-col gap-5 lg:gap-2`}
        >
          {/* image */}
          <div className="flex-1 ">
            <Image
              src={contact}
              alt="musili"
              className=" md:h-[500px] object-cover  md:w-[400px]"
            />
          </div>

          {/* form */}
          <div className="flex-1">
            <form
              action=""
              className="w-full md:h-[500px] flex flex-col gap-2 md:gap-4"
            >
              <input type="text" className="formInput" placeholder="Name" />
              <input type="text" className="formInput" placeholder="Email" />
              <input type="text" className="formInput" placeholder="Subject" />
              <textarea
                name=""
                placeholder="Message Body"
                id=""
                className=" p-2 py-4 text-sm outline-none  border bg-[#FBFAFB] border-gray-200 rounded-sm"
                cols="30"
                rows="10"
              ></textarea>

              <div className="flex justify-start">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>

        <div
          className={` ${styles.paddingY} w-full gap-2 flex flex-col md:flex-row justify-around  items-start md:items-center`}
        >
          {contactIcons.map((item) => (
            <div
              className={ `py-4 md:py-10  flex md:flex-col gap-2 items-center`}
            >
              <div className=" w-[50px] flex items-center justify-center h-[50px]  bg-secondary-500 rounded-full">
                <Image src={item.icon} alt={item.name} className="h-[30px] w-[30px]" />
              </div>
              <h1
                className={`font-poppins text-[13px]  lg:text-[16px] tracking-wide  leading-[31px] font-semibold`}
              >
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
