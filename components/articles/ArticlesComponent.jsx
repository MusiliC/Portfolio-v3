import { articles } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import React from "react";
import Header from "../shared/Header";
import Link from "next/link";

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
              className={`${styles.paddingY} hover:bg-gray-100  flex flex-col-reverse md:flex-row md:items-center gap-4 border-t border-b  py-5 border-gray-300 md:gap-[30px] lg:gap-[70px]`}
            >
              {/* title and desc */}
              <div className="flex-1 flex-col gap-3 px-2 ">
                <h1 className="font-semibold font-poppins md:text-[20px] text-secondary-100 text-[18px]">
                  {article.name}
                </h1>

                <p className={`${styles.paragraph}`}>{article.desc}</p>
              </div>

              {/* image */}
              <div className="md:w-[40%] px-2 lg:w-[25%]  flex cursor-pointer justify-center">
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
