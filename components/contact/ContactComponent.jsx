"use client";

import styles from "@/style";
import Image from "next/image";
import React, { useState } from "react";
import contact from "public/contact.jpg";
import Button from "../shared/Button";
import { contactIcons } from "@/constants";

const ContactComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

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
              className="w-full md:h-[500px] flex flex-col gap-2 md:gap-1"
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="formLabel">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                className="formInput"
                onChange={handleChange}
              />
              <label htmlFor="" className="formLabel">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="formInput"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="" className="formLabel">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="formInput"
                value={values.subject}
                onChange={handleChange}
              />
              <label htmlFor="" className="formLabel">
                Body
              </label>
              <textarea
                name="body"
                id=""
                className=" p-2 py-4 text-sm outline-none  border bg-[#FBFAFB] border-gray-200 rounded-sm"
                cols="20"
                rows="10"
                value={values.body}
                onChange={handleChange}
              ></textarea>

              <div className="flex justify-start mt-2.5">
                <button className="btnStyles">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div
          className={` ${styles.paddingY} w-full gap-2 flex flex-col md:flex-row justify-around  items-start md:items-center`}
        >
          {contactIcons.map((item) => (
            <div
              className={`py-4 md:py-10  flex md:flex-col gap-2 items-center`}
            >
              <div className=" w-[50px] flex items-center justify-center h-[50px]  bg-secondary-500 rounded-full">
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="h-[30px] w-[30px]"
                />
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
