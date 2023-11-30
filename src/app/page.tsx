import Companies from "@/app/(components)/Companies";
import Testimony from "@/app/(components)/Testimony";
import Courses from "@/app/(components)/Courses";
import HeroSection from "@/app/(components)/HeroSection";
import Achievements from "@/app/(components)/Achievements";
import MissionVision from "./(components)/MissionVision";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Achievements />
      <MissionVision />
      <Courses />
      <Testimony />
      <Companies />
    </>
  );
}
