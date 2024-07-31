import About from "@/components/About";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
// import Motivational from "@/components/Motivational";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[1024px] flex-col items-center mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-[#282C33]">
      <Header/>
      <section className="pt-8">
        <HeroContent/>
      </section>
      {/* <div className="pt-28">
        <Motivational />
      </div> */}
      <section className="pt-28 w-full">
        <Projects />
      </section>
      <section className="pt-28 w-full">
        <Skills />
      </section>
      <section className="pt-28 w-full">
        <About />
      </section>
    </main>
  );
}