import { blogs } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OneBlog from "./OneBlog";

const Blogs = () => {
  return (
    <section className={`${styles.paddingY} w-[80%] max-lg:w-5/6 mx-auto`}>
      {/* Main Blog */}
      <div className="flex max-lg:flex-col gap-8">
        <div className="w-[55%] max-lg:w-[100%]">
          <Link href={blogs[0]?.url} rel="noopener noreferrer" target="_blank">
            <Image src={blogs[0]?.image} />{" "}
          </Link>
        </div>
        <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-2 justify-center items-start">
            <p className="text-sm italic">category: {blogs[0]?.category}</p>
          <h1 className="w-3/4 max-lg:w-full headingTwoStart">
            {blogs[0]?.title}
          </h1>
          <h2>{blogs[0]?.desc}</h2>

          <Link
            href={blogs[0]?.url}
            rel="noopener noreferrer"
            target="_blank"
            className="underline font-semibold"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* List */}
      <div
        className={`py-14 max-lg:py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 `}
      >
        {blogs?.slice(1).map((blog) => (
          <OneBlog
            title={blog?.title}
            desc={blog?.desc}
            image={blog?.image}
            url={blog?.url}
            category={blog?.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
