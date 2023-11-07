import QABg from "@/app/assets/QA.jpg";
import businessAnalysisImg from "@/app/assets/business_analysis.jpg";
import appDev from "@/app/assets/app_development-1.webp";
import devOpsImg from "@/app/assets/devops.png";
import productMgtImg from "@/app/assets/product_management.png";

import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <div className="w-full p-4 lg:p-8 flex flex-col gap-6">
            <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl">
                Our Courses
            </h2>
            <div className="container mx-auto grid lg:grid-cols-3 justify-items-center gap-8">
                <CourseCard
                    src={QABg}
                    title="Software Quality Assurance"
                    path="/courses#software_quality_assurance"
                />
                <CourseCard
                    src={businessAnalysisImg}
                    title="Business Analysis"
                    path="/courses#business_analysis"
                />
                <CourseCard src={appDev} title="Software Developement" path="/courses#software_development"/>
                <CourseCard src={productMgtImg} title="Product Management" path="/courses#product_management"/>
                <CourseCard src={devOpsImg} title="DevOps" path="/courses#devops"/>
            </div>
        </div>
    );
}
