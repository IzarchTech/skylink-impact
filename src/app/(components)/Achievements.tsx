"use client";

import Achivement from "./Achivement";
import VStack from "./VStack";

const ACHIEVEMENTS: { title: string; noOfTimes: number }[] = [
  {
    noOfTimes: 500,
    title: "SUCCESS STORIES",
  },

  {
    noOfTimes: 600,
    title: "CANDIDATES",
  },

  {
    noOfTimes: 60,
    title: "COMPLETED PROJECTS",
  },
];

export default function Achievements() {
  return (
    <VStack className="w-full bg-slate-50 py-4 px-4 justify-center items-center">
      <div className="container grid lg:grid-cols-3 justify-items-center">
        {ACHIEVEMENTS.map((ach) => (
          <Achivement
            key={ach.title}
            noOfTimes={ach.noOfTimes}
            title={ach.title}
          />
        ))}
      </div>
    </VStack>
  );
}
