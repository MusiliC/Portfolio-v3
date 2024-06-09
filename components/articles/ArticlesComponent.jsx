
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

      <div className={`${styles.paddingY} lg:w-4/6 flex justify-center items-center w-5/6 mx-auto`}>
       <div className="text-lg">Working on Updates</div>
      </div>
    </section>
  );
};

export default ArticlesComponent;
