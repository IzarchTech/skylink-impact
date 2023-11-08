import mentoringImg2 from "@/app/assets/mentoring2.jpg";
import Image from "next/image";
import VStack from "@/app/(components)/VStack";

export default function MentoringPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={mentoringImg2}
                    className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="mentoring"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Mentoring
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
                <VStack className="lg:w-3/5 gap-3">
                    <p>
                        Our IT mentoring services leverage industry-specific tools and frameworks to guide your
                        team&apos;s growth and skill development.
                    </p>
                    <p>
                        To ensure effective growth and skill development, our mentoring services follow a structured
                        process of :
                    </p>
                    <VStack className="gap-1">
                        <p>- Needs Assessment</p>
                        <p>- Mentor Matching</p>
                        <p>- Personal Development</p>
                    </VStack>

                    <p>Plan (PDP)</p>
                    <VStack className="gap-1">
                        <p>- Goal Setting</p>
                        <p>- Skill Development</p>
                        <p>- Progress Monitoring</p>
                    </VStack>
                    <p>We provide mentorship in key technologies and offer tailored guidance in IT skill development,
                        career transition, and professional growth.
                    </p>
                </VStack>
            </VStack>
        </>
    );
}