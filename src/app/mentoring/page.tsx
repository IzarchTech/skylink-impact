import Image from "next/image";
import mentorBg from "@/app/assets/mentor.webp";
import VStack from "@/app/(components)/VStack";
import FocusPoint from "@/app/mentoring/(components)/FocusPoint";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Mentoring - Skylink Impact",
    description: "SkyLink believes in the need to improve and grow IT potentials, which has led to the creation of the Mentoring program, as a business service solution",
    openGraph: {
        title: "Mentoring - Skylink Impact",
        description: "SkyLink believes in the need to improve and grow IT potentials, which has led to the creation of the Mentoring program, as a business service solution",
    }
}

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
                <div className="lg:w-3/5">
                    <VStack className="gap-y-8">
                        <h3 className="font-bold underline text-lg">AIM</h3>
                        <VStack>
                            <p>SkyLink believes in the need to improve and grow IT potentials, which has led to the
                                creation of the Mentoring program, as a business service solution. The Mentoring Program
                                is an initiative that allows SkyLink to coach, guide, and tutor students who are
                                interested in learning and improving their IT skills. It provides students with access
                                to experienced mentors who possess a wealth of knowledge and skills with flexible
                                schedules while providing practical and work projects to instill hands-on, real-life
                                experience, which would greatly improve their professional skills, competence, and
                                confidence in the industry.</p>
                        </VStack>

                        <h3 className="font-bold underline text-lg">FOCUS</h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
                            <FocusPoint point="Software QA Pros"/>
                            <FocusPoint point="BA Pros"/>
                            <FocusPoint point="Software Development"/>
                            <FocusPoint point="DevOps"/>
                            <FocusPoint point="Product Mgt. Pros"/>
                            <FocusPoint point="Business Consulting"/>
                            <FocusPoint point="Mentoring"/>
                            <FocusPoint point="Software Testing"/>
                            <FocusPoint point="Agile Coaching"/>
                            <FocusPoint point="Artificial Intelligence"/>
                        </div>
                    </VStack>
                </div>
            </VStack>
        </>
    );
}