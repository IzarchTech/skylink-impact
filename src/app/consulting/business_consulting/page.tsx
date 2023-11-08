import bizConsultImg from "@/app/assets/biz_consult.jpg";
import Image from "next/image";
import VStack from "@/app/(components)/VStack";

export default function BusinessConsultingPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={bizConsultImg}
                    className="object-fill object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="consulting"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Business Consulting Services
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
                <VStack className="lg:w-3/5 gap-3">
                    <p>
                        Our business consulting services are designed to help your organization thrive. We utilize a
                        range of proven methodologies, such as SWOT analysis and process optimization, to enhance your
                        operations.
                    </p>
                    <p>
                        Our experienced consultants help you analyze, optimize, and transform your business processes.
                        Whether you need strategic guidance or operational improvement, we&apos;re here to help you
                        succeed.
                    </p>
                    <p>
                        Our business consulting services are designed to help your organization thrive through a
                        structured approach. We follow a process that includes:
                    </p>
                    <VStack className="gap-1">
                        <p>- Assessment and Analysis</p>
                        <p>- Strategy Development</p>
                        <p>- Implementation</p>
                        <p>- Continuous Improvement</p>
                    </VStack>
                    <p>
                        We also utilize advanced analytics tools to provide data-driven insights for strategic
                        decision-making.
                    </p>
                </VStack>
            </VStack>
        </>
    );
}