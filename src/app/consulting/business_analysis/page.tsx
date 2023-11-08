import Image from "next/image";

import businessAnalysisImg from "@/app/assets/business_analysis.jpg";
import VStack from "@/app/(components)/VStack";

export default function BusinessAnalysisPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={businessAnalysisImg}
                    className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="Business Analysis"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Business Analysis Services
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
                <VStack className="lg:w-3/5 gap-3">
                    <p>
                        Our business analysis (BA) services employ a range of tools and methodologies to identify
                        opportunities for growth. We conduct in-depth analysis of your processes, data, and operations
                        using data analytics tools such as Tableau and Power BI.
                    </p>

                    <p>
                        Our business analysis services are grounded in a well-defined process, which are:
                    </p>
                    <VStack className="gap-1">
                        <p>- Needs Assessment</p>
                        <p>- Data Analysis</p>
                        <p>- Insights and Strategy</p>
                        <p>- Continuous Monitoring</p>
                    </VStack>
                    <p>
                        We provide actionable insights for strategic decisions based on our findings.
                    </p>
                </VStack>
            </VStack>
        </>
    );
}