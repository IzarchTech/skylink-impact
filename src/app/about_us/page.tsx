import VStack from "@/app/components/VStack";
import HStack from "@/app/components/HStack";
import {FaArrowRight} from "react-icons/fa6";

export default function AboutUsPage() {
    return (
        <>
            <div className="w-full relative h-[30rem] lg:min-h-[40rem] pt-[65px]">
                <video loop autoPlay className="w-full h-full object-cover object-top lg:object-center">
                    <source src="/assets/about_us.webm"/>
                </video>

                <div className="text-white absolute inset-0 z-10">
                    <div className="container min-h-full items-center justify-center flex flex-col mx-auto gap-8 p-4">
                        <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl">
                            About Us
                        </h2>
                    </div>
                </div>
                <div className="inset-0 absolute bg-[#1c1f21b8]"/>
            </div>

            <VStack className="w-full bg-slate-50 px-4 py-12 items-center justify-center">
                <VStack className="container text-justify gap-28 text-xl">
                    <VStack className="lg:w-[70ch] gap-4 mx-auto">
                        <p>SkyLink
                            Impact is an IT Business Consultancy and Mentoring company that acts as a guiding light
                            in the ever-evolving world of IT.</p>
                        <p>Established in 2014, SkyLink Impact has helped advance the professional careers of both old
                            and
                            new entrants within the IT sector, by providing them with the necessary skills to secure
                            jobs
                            and advance their careers.</p>
                        <p>Our process includes:</p>
                        <VStack className="gap-2">
                            <HStack className="items-center gap-2">
                                <FaArrowRight/>
                                <p>Uniquely tailored Business solutions</p>
                            </HStack>
                            <HStack className="items-center gap-2">
                                <FaArrowRight/>
                                <p>Expert mentoring services</p>
                            </HStack>
                            <HStack className="items-center gap-2">
                                <FaArrowRight/>
                                <p>Live project collaborations</p>
                            </HStack>
                            <HStack className="items-center gap-2">
                                <FaArrowRight/>
                                <p>Practical, day-to-day work simulation experience</p>
                            </HStack>
                            <HStack className="items-center gap-2">
                                <FaArrowRight/>
                                <p>Cv structuring and Referencing</p>
                            </HStack>
                        </VStack>
                    </VStack>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <VStack className="justify-center items-center lg:items-end">
                            <VStack
                                className="rounded-full p-2 text-slate-50 h-80 w-80 bg-slate-800 uppercase shadow-lg text-4xl justify-center items-center">
                                <h2 className="text-center">The Two Arms of SkyLink</h2>
                            </VStack>
                        </VStack>

                        <VStack className="gap-4 text-xl text-justify shadow-md lg:p-8 p-4 rounded-lg ring-slate-700">
                            <p>As a Business Consultancy, we are dedicated to enhancing the efficiency and effectiveness
                                of your business operations. With a deep understanding of various industries and a
                                commitment to delivering tailored solutions, our team of experts will work closely with
                                you to identify challenges, manage processes, and optimize your work culture.</p>
                            <p>We aim to improve the overall quality assurance of your business, ensuring that you
                                achieve your objectives and maintain a competitive edge in the market. Your success is
                                our priority, and we&apos;re here to provide you with the strategic insights and and
                                IT-driven solutions you need to thrive.</p>
                            <p>As a Mentoring Company we are dedicated to fostering the growth and development of
                                individuals within the IT industry. As such, we provide knowledge advancement trainings,
                                practical skills & project experience and continuous mentorship services to IT
                                professionals and others, looking to break into the industry. Our core mission revolves
                                around equipping IT professionals with the skills and knowledge they need to excel in a
                                rapidly changing technological landscape.</p>
                        </VStack>
                    </div>
                    <VStack className="gap-4">
                        <h2 className="text-center uppercase text-4xl">Why SkyLink?</h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <VStack
                                className="justify-center items-center lg:items-start lg:order-2 shadow-md p-4 lg:p-8 gap-8 rounded-2xl border-2 border-slate-200">
                                <VStack
                                    className="px-4 py-2 text-slate-50 bg-slate-700 justify-center items-center rounded-full">
                                    <h2 className="text-center">For Business Consultancy</h2>
                                </VStack>
                                <VStack className="gap-4">
                                    <p><span className="underline">Business Solutions:</span> Our Business Consultancy
                                        services
                                        are customized to your
                                        company&apos;s unique needs, ensuring that our solutions align perfectly with
                                        your
                                        business goals</p>
                                    <p><span className="underline">Process Optimization</span>: We excel in process
                                        improvement,
                                        helping your organization
                                        streamline operations, reduce inefficiencies, and enhance productivity.</p>
                                    <p><span className="underline">Data-Driven Decision-Making</span>: With our
                                        guidance,
                                        you&apos;ll harness the power of data
                                        analytics to make informed decisions that drive growth and profitability.</p>
                                    <p><span className="underline">Strategic Planning</span>: We work closely with your
                                        team
                                        to
                                        develop comprehensive
                                        strategies that guide your business toward long-term success.</p>
                                    <p><span className="underline">Quality Assurance</span>: Our consultancy services
                                        are
                                        founded on a commitment to quality
                                        assurance, ensuring that your products and services meet the highest standards.
                                    </p>
                                    <p><span className="underline">
                                Cost Efficiency</span>: Our consultancy experts help you identify cost-saving
                                        opportunities
                                        while maintaining or enhancing service quality.
                                    </p>
                                </VStack>
                            </VStack>
                            <VStack
                                className="justify-center items-center lg:items-start lg:order-2 shadow-md p-4 lg:p-8 gap-8 rounded-2xl border-2 border-slate-200">
                                <VStack
                                    className="py-2 px-4 text-slate-50 bg-slate-700 justify-center items-center rounded-full">
                                    <h2 className="text-center">For Mentoring</h2>
                                </VStack>
                                <VStack className="gap-4">
                                    <p><span className="underline">Expert Guidance</span>: Our seasoned mentors are
                                        industry
                                        experts who provide personalized
                                        guidance, ensuring that you receive the most up-to-date insights and knowledge
                                    </p>

                                    <p><span className="underline">Career Advancement</span>: We are dedicated to
                                        advancing
                                        your
                                        career by helping you set
                                        and achieve goals, troubleshoot challenges, and acquire the skills and
                                        confidence
                                        needed to succeed.</p>

                                    <p><span className="underline">Flexible Learning</span>: Whether you&apos;re just
                                        starting
                                        your IT journey or seeking to enhance
                                        your expertise, our mentoring programs are tailored to your skill level and
                                        learning
                                        pace.</p>

                                    <p><span className="underline">Real-World Experience</span>: Our mentors provide you
                                        with
                                        practical, real-world insights
                                        and challenges, ensuring that you gain experience beyond theoretical knowledge.
                                    </p>

                                    <p><span className="underline">Continuous Support</span>: We don&apos;t just mentor
                                        and
                                        leave; we offer ongoing support to
                                        monitor your progress and help you overcome obstacles.</p>

                                    <p><span className="underline">Networking Opportunities</span>: Connect with
                                        like-minded
                                        IT
                                        professionals and build a
                                        network that can be invaluable in your career journey.</p>
                                </VStack>
                            </VStack>
                        </div>

                        <p className="lg:w-[40ch] mx-auto text-center">We are Powered by intellect, Driven by Value, and
                            committed to guiding you on your
                            journey towards IT excellence.</p>
                    </VStack>
                </VStack>
            </VStack>
        </>
    );
}