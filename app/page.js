import Hero from "@/components/home/Hero";
import Me from "@/components/home/Me";
import Service from "@/components/home/Service";

export default function Home() {

  // const [isTopOfPage, setIsTopOfPage] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage(SelectedPage.Home);
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


  return (
    <main className=" ">
      <section className="min-h-[100vh] pt-28  lg:pt-32 bg-primary-two-100">
        <Hero />
      </section>
      <Me />

      <Service />
    </main>
  );
}
