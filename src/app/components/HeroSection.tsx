"use client";
import Image from "next/image";

import meetingImg from "@/app/assets/meeting.webp";
import { useEffect, useState } from "react";

const titles = [
  "an Automation QA / Tester",
  "a Manual Tester",
  "a Scrum Master",
  "a DevOps Engineer",
  "an App Developer",
  "a Cyber Security Analyst",
  "a Data Analyst",
];

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      <Image
        src={meetingImg}
        className="object-cover h-[60vh] lg:h-[80vh] w-full object-top lg:object-center"
        alt="meeting"
        priority
      />
      <div className="inset-0 absolute bg-[#17191abd]" />
      <div className="inset-0 absolute z-10">
        <div className="container mx-auto min-h-full items-center justify-center flex flex-col">
          <h2 className="text-center text-slate-50 font-bold text-3xl">
            Become{" "}
            <span className="text-4xl text-yellow-600">
              {titles[currentTitle]}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
