import Image from "next/image";

import devOpsImg from "@/app/assets/devops.png";
import VStack from "@/app/(components)/VStack";

export default function DevOpsPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={devOpsImg}
                    className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="DevOps"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            DevOps Services
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
                <VStack className="lg:w-3/5 gap-3">
                    <p>
                        Our DevOps services employ leading tools and practices to streamline development, testing, and
                        deployment.
                    </p>

                    <p>
                        Our DevOps services follow a well-structured process that ensures streamlined development and
                        deployment, which is:
                    </p>
                    <VStack className="gap-1">
                        <p>- Assessment</p>
                        <p>- Tool Selection</p>
                        <p>- Implementation</p>
                        <p>- Continuous Monitoring & Optimization</p>
                    </VStack>
                    <p>
                        We focus on automation, collaboration, and efficiency, and we use tools like Jenkins, Docker and
                        Kubernetes to enhance your software delivery.
                    </p>
                </VStack>
            </VStack>
        </>
    );
}