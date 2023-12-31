import Image from "next/image";
 import aboutImage from "/public/laptop3.jpg";

 
export const metadata = {
  title: "Portfolio",
  description: "Created by Musili",
};

export default function RootLayout({ children }) {
  return (
    <section className="w-full pt-14 md:pt-20  ">
      <div className=" relative w-full  bg-gradient-to-br from-primary-500 to-secondary-500  h-[300px]">
        <Image
          src={aboutImage}
          className="h-full w-full opacity-[70%] grayscale-[60%] mix-blend-overlay object-cover"
          alt="about"
        />

        <div className="  px-6 py-2 absolute bottom-[100px] rounded-lg left-[30px] md:left-[60px] lg:left-[100px]">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest">
            My Works
          </p>
          <p className=" md:text-lg  tracking-wider leading-[18px] mt-4 md:mt-2">
            Web Projects and UX Design projects, choose gallery.
          </p>
        </div>
      </div>
      <div className=" h-full pb-16">

      {children}
      </div>
    </section>
  );
}
