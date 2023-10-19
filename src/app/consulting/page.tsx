import {Metadata} from "next";
import Image from "next/image";
import VStack from "@/app/components/VStack";

import consultationBg from "@/app/assets/consultation.webp";
import consultation2Bg from "@/app/assets/consultation2.webp";
import InfoCard from "@/app/consulting/components/InfoCard";

export const metadata: Metadata = {
    title: "Consulting - Skylink Impact",
    description: "Discover and learn more about our extensive range of services, tailored uniquely to your organisations needs",
    openGraph: {
        title: "Consulting - Skylink Impact",
        description: "Discover and learn more about our extensive range of services, tailored uniquely to your organisations needs",
    }
}

export default function ConsultingPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={consultationBg}
                    className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="consulting"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Consulting
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full items-center justify-center">
                <VStack className="container items-center justify-center px-4 py-12">
                    <h2 className="text-4xl font-bold text-center">Our Services</h2>
                    <p className="italic text-center lg:w-3/4">Discover and learn more about our extensive range of
                        services, tailored uniquely to your organisations needs</p>

                    <VStack className="mt-9">
                        <h2 className="text-3xl font-semibold">We Offer:</h2>
                        <div
                            className="grid lg:grid-cols-2 lg:grid-rows-4 gap-10 mt-8 text-justify justify-items-center">
                            <InfoCard title="Business Consulting" description="Elevate your organisation with our expert business consultants. We&apos;ll
                                    collaborate
                                    with
                                    you to devise innovative business strategies, drive organisational growth, and boost
                                    business performance."/>

                            <InfoCard title="Software Quality Assurance" description="Ensure impeccable software quality for your organisation. Partner our QA experts to
                                exceed
                                industry standards and enhance your digital offerings."/>

                            <InfoCard title="Mentoring" description="Empower your team with our mentoring program. We provide tailored guidance and knowledge
                                to
                                help your organisation&apos;s members foster IT skill development, and excel in the IT
                                industry."/>

                            <InfoCard title="Agile Coaching" description="With our Agile Coaching solutions, we will empower your teams to adapt, innovate and
                                thrive
                                in a dynamic business environment to help your organisation stay ahead in your
                                industry."/>

                            <InfoCard title="Artificial Intelligence" description="By leveraging AI&apos;s transformative potential, we create intelligent AI-powered
                                solutions and systems for your organisation, to drive efficiency and innovation."/>

                            <InfoCard title="Business Analysis" description="Gain valuable insights into your organisation&apos;s challenges with our expert
                                analysis. We
                                provide data-driven recommendations to optimize your decision-making processes, to
                                enhance
                                your business analysis services."/>

                            <InfoCard title="DevOps" description="Using our DevOps practices, we will help streamline your organisation&apos;s development
                                and
                                operations. We foster collaboration and process automation to ensure faster more
                                reliable
                                DevOps solutions and outcomes."/>

                            <InfoCard title="Product Management" description="We will transform your organisation&apos;s ideas into successful products. Our expert
                                product
                                managers guide every step of the process, from ideation to market, ensuring successful
                                offerings and providing product management services."/>
                        </div>
                    </VStack>
                </VStack>

            </VStack>

            <VStack className="w-full bg-slate-800 text-slate-50 items-center justify-center">
                <VStack className="container items-center justify-center py-12 px-4 gap-10">
                    <h2 className="text-4xl font-bold text-center">Our Approach to Consulting</h2>
                    <div className="grid lg:grid-cols-2 place-items-center gap-8">
                        <Image
                            src={consultation2Bg}
                            className="object-cover object-center w-full lg:order-2"
                            alt="consultation"
                            priority
                        />
                        <VStack className="gap-4 text-justify">
                            <p className="text-lg">Our distinctive consulting approach is rooted in our ability to
                                create,
                                strategize, and execute refined digital business solutions that are not only uniquely
                                suited
                                to individual development, but include business elevation,process improvement and
                                quality
                                assurance enhancements, for organisations.</p>
                            <p className="text-lg">We guarantee not only a tangible transformation but a remarkable
                                journey toward realizing your desired change and growth.</p>
                            <p className="text-lg"> Our innovative strategies encompass a broad spectrum, ranging from
                                advanced IT solutions and seamless software integration to comprehensive business
                                security and development endeavors.</p>
                            <p className="text-lg">Quality assurance and process improvements are our watchwords. We are
                                Tech driven, Quality assured.</p>
                        </VStack>
                    </div>
                </VStack>
            </VStack>
        </>
    );
}