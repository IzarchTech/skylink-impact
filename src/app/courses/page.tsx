import {Metadata} from "next";
import Image from "next/image";
import {FaCheckCircle} from "react-icons/fa";


import coursesBg from "@/app/assets/courses_bg.webp";
import businessAnalysisImg from "@/app/assets/business_analysis.jpg";
import appDev from "@/app/assets/app_development-1.webp";
import appDev2 from "@/app/assets/app_development-2.jpg";
import QABg from "@/app/assets/QA.jpg";
import productMgtImg from "@/app/assets/product_management.png";
import devOpsImg from "@/app/assets/devops.png";
import VStack from "@/app/components/VStack";
import HStack from "@/app/components/HStack";
import {FaMobileScreenButton} from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Courses - Skylink Impact",
}

export default function CoursesPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={coursesBg}
                    className="object-cover object-center lg:object-bottom h-[60vh] lg:h-[80vh] w-full"
                    alt="courses"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Courses
                        </h2>
                    </div>
                </div>
            </div>
            <VStack className="w-full">
                <div className="w-full bg-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4">
                    <h3 className="text-center text-2xl font-bold">Software Quality Assurance</h3>
                    <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
                        <Image
                            src={QABg}
                            className="object-cover object-center w-full"
                            alt="courses"
                            priority
                        />
                        <VStack className="text-lg gap-8">
                            <p>We intend to impart knowledge on the way and manner through which all Software
                                Engineering Processes, methods and activities are monitored and how they comply against
                                set standards. The ultimate goal of this process is to ensure Quality and standard
                                adherence.</p>
                            <VStack className="gap-4">
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>Front & Backend Testing</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>Software Testing Lifecycle</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>Software Test Automation</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>TDD & BDD</p>
                                </HStack>
                            </VStack>
                        </VStack>
                    </div>
                </div>

                <div
                    className="w-full bg-slate-700 text-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4">
                    <h3 className="text-center text-2xl font-bold">Business Analysis</h3>
                    <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
                        <Image
                            src={businessAnalysisImg}
                            className="object-cover object-center w-full order-2"
                            alt="courses"
                            priority
                        />
                        <VStack className="text-lg gap-8">
                            <p>A Business Analyst is a key to the successful and efficient running of business processes
                                and systems. As such, this course is curated with the mindset of imparting the relevant
                                skill set necessary to identify the flaws in business processes and make improvements
                                for
                                efficiency.</p>
                            <VStack className="gap-4">
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>Gap Analysis</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>Enterprise Architecture</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>AGILE (SCRUM, Kanban, LESS)</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>Stakeholder Management</p>
                                </HStack>
                            </VStack>
                        </VStack>
                    </div>
                </div>

                <div className="w-full bg-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4">
                    <h3 className="text-center text-2xl font-bold">Software Development</h3>
                    <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
                        <div className="grid grid-cols-2 grid-rows-2  place-content-center">
                            <Image
                                src={appDev}
                                className="object-cover object-center w-full"
                                alt="courses"
                                priority
                            />
                            <VStack
                                className="bg-gray-900 items-center justify-around p-2 text-3xl lg:text-5xl text-slate-50">
                                <FaMobileScreenButton/>
                                <p className="text-base font-semibold">Android &amp; iOS</p>
                            </VStack>
                            <Image
                                src={appDev2}
                                className="object-cover object-center w-full order-3"
                                alt="courses"
                                priority
                            />
                            <VStack
                                className="bg-gray-900 items-center justify-around p-2 text-3xl lg:text-5xl text-slate-50">
                                <FaMobileScreenButton/>
                                <p className="text-base font-semibold">Web interactive services</p>
                            </VStack>
                        </div>
                        <VStack className="text-lg gap-8">
                            <p>This is seen as the entirety of all the processes and instructions given by programmers
                                to their computers, with the intention of achieving set goals. Essentially, it is a
                                roadmap by which programmers are able to create programs/software to solve specific
                                problems. As such, this course intends to walk you through the life cycle of software
                                creation, by providing the software development tools, programming languages, and
                                processes required.</p>
                        </VStack>
                    </div>
                </div>

                <div
                    className="w-full bg-slate-700 text-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4">
                    <h3 className="text-center text-2xl font-bold">Product Management</h3>
                    <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
                        <Image
                            src={productMgtImg}
                            className="object-cover object-center w-full"
                            alt="courses"
                            priority
                        />
                        <VStack className="text-lg gap-8">
                            <p>An organizational function that guides the step by step process in the lifecycle of a
                                Product, in order to build the best possible product This course aims to inform the
                                students of the importance of understanding the customers, as it makes it easier to
                                prioritize and tailor-make solutions suited to their needs, which promotes the longevity
                                of a product.</p>
                        </VStack>
                    </div>
                </div>

                <div
                    className="w-full bg-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4">
                    <h3 className="text-center text-2xl font-bold">DevOps</h3>
                    <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
                        <Image
                            src={devOpsImg}
                            className="object-cover object-center w-full order-2"
                            alt="courses"
                            priority
                        />
                        <VStack className="text-lg gap-8">
                            <p>Being a combination of business development and operational processes, the core of their
                                function is to increase an organizations ability to deliver services and applications a
                                lot faster than traditional processes, thereby providing a competitive edge for their
                                services and effectively serving the needs of their customers.</p>
                            <p>This course aims to inform the importance of working smarter as opposed to harder, which
                                is essence of DevOps.</p>
                            <VStack className="gap-4">
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>DevOps Lifecycle</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>DevSecOps</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>AWS</p>
                                </HStack>
                                <HStack className="gap-4 items-center">
                                    <FaCheckCircle/>
                                    <p>Azure Cloud</p>
                                </HStack>
                            </VStack>
                        </VStack>
                    </div>
                </div>
            </VStack>
        </>
    );
}