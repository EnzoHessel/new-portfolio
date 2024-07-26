import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[1024px] flex-col items-center mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-[#23262B]">
      <Header/>
      <div className="pt-8">
        <HeroContent/>
      </div>
    </main>
  );
}