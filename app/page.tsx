import Footer from "@/components/Pages/Footer";
import Header from "@/components/Pages/Header";
import Section1 from "@/components/section/Section1";
import Section2 from "@/components/section/Section2";
import Section3 from "@/components/section/Section3";
import Section4 from "@/components/section/Section4";
import Section5 from "@/components/section/Section5";

export default function Home() {
  return (
    <>
      <div className="back-image">
        <main className="bg-gradient-to-t from-black via-transparent to-black flex min-h-[30rem]  sm:min-h-[45rem] flex-col items-center justify-between p-4">
          <Header />
        </main>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}
