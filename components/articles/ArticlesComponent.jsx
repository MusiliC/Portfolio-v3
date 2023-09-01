import { articles } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import React from "react";
import Header from "../shared/Header";
import Link from "next/link";
import Button from "../shared/Button";

const ArticlesComponent = () => {
  return (
    <section className="w-full">
      {/* header */}
      <div>
        <Header title="Articles" />
      </div>

      <div className={`${styles.paddingY} lg:w-4/6  w-5/6 mx-auto`}>
        {articles.map((article) => (
          <Link
            href="https://novels-app-wheat.vercel.app/blogs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div
              className={`${styles.paddingY} hover:bg-gray-100 pb-10 md:pb-5 items-start flex flex-col-reverse md:flex-row md:items-center gap-4 border-t border-b  py-5 border-gray-300 md:gap-[30px] lg:gap-[70px]`}
            >
              {/* title and desc */}
              <div className="flex-1 flex-col gap-3 px-2 ">
                <h1 className="font-semibold font-poppins md:text-[20px]  text-[18px]">
                  {article.name}
                </h1>

                <p className={`${styles.paragraph} my-3`}>{article.desc}</p>
                <div className="flex  ">
                  <p
                    className={`${styles.paragraph} text-secondary-100 underline`}
                  >
                    Read More
                  </p>
                </div>
              </div>

              {/* image */}
              <div className="md:w-[40%] pt-4 pb-3 px-2 md:px-3 lg:w-[25%]  flex cursor-pointer justify-center">
                <Image
                  src={article.image}
                  alt={article.name}
                  className="h-[180px]  md:h-[150px] w-full rounded-md  object-contain"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ArticlesComponent;
