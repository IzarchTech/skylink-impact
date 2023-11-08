import Image from "next/image";
import agileCoachingImg from "@/app/assets/agile_coach.jpg";
import VStack from "@/app/(components)/VStack";

export default function AgileCoachingPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={agileCoachingImg}
                    className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="Agile coaching"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Agile/Scrum Master Coaching Services
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
                <VStack className="lg:w-3/5 gap-3">
                    <p>
                        Our Agile/Scrum master coaching services use industry-standard tools and best practices to guide
                        your team to effective Agile and Scrum practices. We employ tools like JIRA and Trello to
                        optimize project management.
                    </p>

                    <p>
                        Our coaching processes include:
                    </p>
                    <VStack className="gap-1">
                        <p>- Team Assessment</p>
                        <p>- Coaching Plan</p>
                        <p>- Workshops & Training</p>
                        <p>- Manual Testing</p>
                        <p>- Continuous Improvement</p>
                    </VStack>
                    <p>
                        Our coaches focus on leadership and process improvement, ensuring your team&apos;s success in
                        Agile
                        projects.
                    </p>
                </VStack>
            </VStack>
        </>
    );
}