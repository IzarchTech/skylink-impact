import Image from "next/image";
import contactUsImg from "@/app/assets/contact_us.webp";
import VStack from "@/app/(components)/VStack";
import HStack from "@/app/(components)/HStack";
import {FaEnvelope, FaMobileRetro} from "react-icons/fa6";
import {Metadata} from "next";
import ContactUsForm from "@/app/contact_us/(components)/ContactUsForm";

export const metadata: Metadata = {
    title: "Contact Us - Skylink Impact",
    description: "Empower Your Journey into the Tech World or Elevate Your Career, and Enhance Your Business Operations – Connect with Us Now, and We'll Get in Touch at the Earliest Opportunity!",
    openGraph: {
        title: "Contact Us - Skylink Impact",
        description: "Empower Your Journey into the Tech World or Elevate Your Career, and Enhance Your Business Operations – Connect with Us Now, and We'll Get in Touch at the Earliest Opportunity!",
    }
}
export default function ContactUs() {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={contactUsImg}
                    className="object-cover object-top h-[60vh] lg:h-[80vh] w-full"
                    alt="meeting"
                    priority
                />
                <div className="inset-0 absolute bg-[#17191abd]"/>
                <div className="inset-0 absolute z-10">
                    <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
                        <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
                            Contact Us
                        </h2>
                        <p className="italic text-center text-yellow-200 lg:w-3/4">
                            Empower Your Journey into the Tech World or Elevate Your Career, and Enhance Your Business
                            Operations – Connect with Us Now, and We&apos;ll Get in Touch at the Earliest Opportunity!
                        </p>
                    </div>
                </div>
            </div>
            <VStack className="container mx-auto justify-center items-center my-5">
                <div className="grid lg:grid-cols-3 gap-4 w-full lg:max-w-max p-4">
                    <VStack className="gap-4 order-last lg:order-first">
                        <HStack className="bg-slate-50 shadow-md p-4 gap-3 rounded-md">
                            <div
                                className="flex items-center justify-center p-5 text-xl bg-slate-300 text-slate-700 rounded-full">
                                <FaEnvelope/>
                            </div>
                            <VStack>
                                <p className="font-bold">Email Address</p>
                                <p className="font-thin">info@skylinkimpact.com</p>
                            </VStack>
                        </HStack>
                        <HStack className="bg-slate-50 shadow-md p-4 gap-3 rounded-md">
                            <div
                                className="flex items-center justify-center p-5 text-xl bg-slate-300 text-slate-700 rounded-full">
                                <FaMobileRetro/>
                            </div>
                            <VStack>
                                <p className="font-bold">Phone Number</p>
                                <p className="font-thin">+44 (0)7448923278</p>
                            </VStack>
                        </HStack>
                    </VStack>

                    <ContactUsForm/>
                </div>
            </VStack>
        </>
    );
}