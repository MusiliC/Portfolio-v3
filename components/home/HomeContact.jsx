"use client";

import styles from "@/style";
import Image from "next/image";
import React, { useState } from "react";
import contact from "public/images/chat.svg";
import { contactIcons } from "@/constants";
import toast, { Toaster } from "react-hot-toast";

const HomeContact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
      });

      toast.success("Send Email success!");

      setLoading(false);

      setValues({
        name: "",
        email: "",
        subject: "",
        body: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.paddingY} w-full `}>
      <div className={` w-5/6 mx-auto`}>
      <div className="lg:w-3/4 mx-auto">
        <h2 className="text-center headingTwo">Say Hi!</h2>
        <p className="my-2 text-center">
          Let's have a chat, so message away!
        </p>
      </div>
        <div
          className={`${styles.paddingY} flex flex-row items-center max-lg:flex-col max-lg:gap-5 gap-20`}
        >

          {/* image */}
          <div className="flex-1 ">
            <Image src={contact} alt="musili" />
          </div>

          {/* form */}
          <div className="flex-1 w-full ">
            <form
              action=""
              className="w-full flex flex-col gap-1"
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="formLabel">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={values.name}
                className="formInput"
                onChange={handleChange}
              />
              <label htmlFor="" className="formLabel">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
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
                required
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
                required
                className=" p-2  text-sm outline-none  border bg-[#FBFAFB] border-gray-200 rounded-sm"
                cols="20"
                rows="4"
                value={values.body}
                onChange={handleChange}
              ></textarea>

              <div className="flex justify-start mt-2.5">
                <button className="btnStyles">
                  {loading ? "Sending.." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default HomeContact;
