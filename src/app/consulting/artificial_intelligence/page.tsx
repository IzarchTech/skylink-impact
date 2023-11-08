import Image from "next/image";

import aiImg from "@/app/assets/ai.jpg";
import VStack from "@/app/(components)/VStack";

export default function ArtificialIntelligencePage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={aiImg}
                    className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="Artificial Intelligence"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Artificial Intelligence Services
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
                <VStack className="lg:w-3/5 gap-3">
                    <p>
                        Our artificial intelligence services leverage powerful AI and machine learning frameworks and
                        tools to implement AI solutions.
                    </p>

                    <p>
                        Our AI transformation services are driven by a structured process that ensures successful AI
                        implementation, which are:
                    </p>
                    <VStack className="gap-1">
                        <p>- AI Strategy Development</p>
                        <p>- Model Design & Development</p>
                        <p>- Integration</p>
                        <p>- Continuous Improvement</p>
                    </VStack>
                    <p>
                        We focus on AI strategy development, model design, and integration using tools like TensorFlow
                        and PyTorch.
                    </p>
                </VStack>
            </VStack>
        </>
    );
}