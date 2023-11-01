import Companies from "@/app/(components)/Companies";
import Testimony from "@/app/(components)/Testimony";
import Courses from "@/app/(components)/Courses";
import HeroSection from "@/app/(components)/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <Testimony />
      <Companies />
    </>
  );
}
