import Companies from "./components/Companies";
import Testimony from "./components/Testimony";
import Courses from "./components/Courses";
import HeroSection from "./components/HeroSection";

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
