import softwareAutomationImg from "@/app/assets/software_automation2.webp";
import businessAnalysisImg from "@/app/assets/business_analysis.jpg";
import dataAnlysisImg from "@/app/assets/data_analysis.jpg";
import devopsEngineeringImg from "@/app/assets/devops_engineering.jpg";
import scrumMasterImg from "@/app/assets/scrum_master.jpg";

import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <div className="w-full p-4 lg:p-8 flex flex-col gap-6">
      <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl">
        Our Courses
      </h2>
      <div className="container mx-auto grid lg:grid-cols-3 justify-items-center gap-8">
        <CourseCard
          src={softwareAutomationImg}
          title="Software Automation"
          path="/courses#software_quality_assurance"
        />
        <CourseCard
          src={businessAnalysisImg}
          title="Business Analysis"
          path="/courses#business_analysis"
        />
        <CourseCard src={dataAnlysisImg} title="Data Analysis" path="/" />
        <CourseCard
          src={devopsEngineeringImg}
          title="DevOps Engineering"
          path="/courses#devops"
        />
        <CourseCard src={scrumMasterImg} title="Scrum Master" path="/courses#business_analysis" />
      </div>
    </div>
  );
}
