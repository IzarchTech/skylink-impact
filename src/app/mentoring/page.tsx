import Image from "next/image";
import mentorBg from "@/app/assets/mentor.webp";
import VStack from "@/app/(components)/VStack";
import FocusPoint from "@/app/mentoring/(components)/FocusPoint";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentoring - Skylink Impact",
  description:
    "Elevate Your IT Skills with SkyLink Mentoring / Unlock Your Potential with Expert Guidance",
  openGraph: {
    title: "Mentoring - Skylink Impact",
    description:
      "Elevate Your IT Skills with SkyLink Mentoring / Unlock Your Potential with Expert Guidance",
  },
};

export default function MentoringPage() {
  return (
    <>
      <div className="w-full relative pt-16">
        <Image
          src={mentorBg}
          className="object-cover object-left h-[60vh] lg:h-[80vh] w-full"
          alt="courses"
          priority
        />
        <div className="inset-0 absolute bg-[#17191abd]" />
        <div className="inset-0 absolute z-10">
          <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
            <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
              Mentoring
            </h2>
            <p className="italic text-center text-yellow-200 lg:w-3/4">
              Elevate Your IT Skills with SkyLink Mentoring / Unlock Your
              Potential with Expert Guidance
            </p>
          </div>
        </div>
      </div>
      <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
        <div className="lg:w-3/5">
          <VStack className="gap-y-8">
            <p>
              At SkyLink Impact, we are committed to improving and growing IT
              potential through our comprehensive Mentoring program. This
              initiative serves as a business service solution that allows us to
              coach, guide, and tutor students and professionals interested in
              enhancing their IT skills. Our mentoring programs provide
              knowledge advancement, practical skills, real-world project
              experience, and continuous guidance to IT professionals and those
              looking to break into the industry.
            </p>
            <h3 className="font-bold underline text-lg">
              Technical Mentoring Program
            </h3>
            <VStack className="gap-4">
              <p>
                Our aim revolves around equipping IT professionals with the
                skills and knowledge they need to excel in a rapidly changing
                technological landscape. Whether you&apos;re a novice or an
                experienced professional, we offer mentorship to help you
                succeed.
              </p>
              <p>
                Our mentoring program provides a unique opportunity to access
                experienced mentors who possess a wealth of knowledge and
                skills.
              </p>
            </VStack>

            <h3 className="font-bold underline text-lg uppercase">
              Focus Areas
            </h3>

            <p className="-mt-7">
              Our Mentoring program encompasses a wide range of IT domains,
              including:
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
              <FocusPoint point="Software QA Pros" />
              <FocusPoint point="BA Pros" />
              <FocusPoint point="Software Development" />
              <FocusPoint point="DevOps" />
              <FocusPoint point="Product Development" />
              <FocusPoint point="Business Consulting" />
              <FocusPoint point="Mentoring" />
              <FocusPoint point="Software Testing" />
              <FocusPoint point="Agile Coaching" />
              <FocusPoint point="Artificial Intelligence" />
            </div>
          </VStack>
        </div>
      </VStack>
    </>
  );
}
