import QABg from "@/app/assets/QA.jpg";
import Image from "next/image";
import VStack from "@/app/(components)/VStack";

export default function SoftwareTestingPage() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={QABg}
                    className="object-fill object-center h-[60vh] lg:h-[80vh] w-full"
                    alt="software testing"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191ade]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Software Testing
                        </h2>
                    </div>
                </div>
            </div>

            <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
                <VStack className="lg:w-3/5 gap-3">
                    <p>
                        Quality assurance is paramount in the software development process. Our comprehensive testing
                        services include a range of processes to ensure that your software and applications are
                        reliable, secure, and bug-free.
                    </p>
                    <p>
                        Our testing processes include:
                    </p>
                    <VStack className="gap-1">
                        <p>- Test Planning and
                            Strategy </p>
                        <p>- Test Case Design and
                            Documentation </p>
                        <p>- Automated Testing </p>
                        <p>- Manual Testing </p>
                        <p>- API Integration/Testing </p>
                        <p>- Regression Testing </p>
                        <p>- Performance Testing </p>
                        <p>- Security Testing </p>
                        <p>- Usability Testing</p>
                    </VStack>
                    <p>We use industry-standard testing frameworks and tools like Selenium, JIRA, LoadRunner and Postman
                        to ensure the highest quality in your software and eliminate defects before they impact your
                        users.
                    </p>
                </VStack>
            </VStack>
        </>
    );
}