import Hero from "@/components/home/Hero";
import HomeContact from "@/components/home/HomeContact";
import HomeProjects from "@/components/home/HomeProjects";
import Me from "@/components/home/Me";
import Service from "@/components/home/Service";

export default function Home() {



  return (
    <main className=" ">
      <section className="min-h-[100vh] pt-28  lg:pt-32 bg-primary-two-100">
        <Hero />
      </section>
      <Me />
      <Service />
      <HomeProjects/>
      <HomeContact/>
    </main>
  );
}
