import { Metadata } from "next";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";

import VStack from "@/app/(components)/VStack";
import HStack from "@/app/(components)/HStack";
import coursesBg from "@/app/assets/courses_bg.webp";
import businessAnalysisImg from "@/app/assets/business_analysis.jpg";
import appDev from "@/app/assets/app_development-1.webp";
import appDev2 from "@/app/assets/app_development-2.jpg";
import QABg from "@/app/assets/QA.jpg";
import productDevImg from "@/app/assets/product_development.webp";
import devOpsImg from "@/app/assets/devops.png";
import scrumImg from "@/app/assets/scrum.webp";

export const metadata: Metadata = {
  title: "Courses - Skylink Impact",
};

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
        <div className="inset-0 absolute bg-[#17191abd]" />
        <div className="inset-0 absolute z-10">
          <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
            <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
              Courses
            </h2>
          </div>
        </div>
      </div>
      <VStack className="w-full">
        <div
          className="w-full bg-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4"
          id="software_quality_assurance"
        >
          <h3 className="text-center text-2xl font-bold">
            Software Quality Assurance
          </h3>
          <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
            <Image
              src={QABg}
              className="object-cover object-center w-full"
              alt="courses"
              priority
            />
            <VStack className="text-lg gap-8">
              <p>
                We intend to impart knowledge on the way and manner through
                which all Software Engineering Processes, methods and activities
                are monitored and how they comply against set standards. The
                ultimate goal of this process is to ensure Quality and standard
                adherence.
              </p>
              <VStack className="gap-4">
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>Front & Backend Testing</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>Software Testing Lifecycle</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>Software Test Automation</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>TDD & BDD</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>API Testing (Manual and Automation)</p>
                </HStack>
              </VStack>
            </VStack>
          </div>
        </div>

        <div
          className="w-full bg-slate-700 text-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4"
          id="business_analysis"
        >
          <h3 className="text-center text-2xl font-bold">Business Analysis</h3>
          <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
            <Image
              src={businessAnalysisImg}
              className="object-cover object-center w-full order-2"
              alt="courses"
              priority
            />
            <VStack className="text-lg gap-8">
              <p>
                A Business Analyst is a key to the successful and efficient
                running of business processes and systems. As such, this course
                is curated with the mindset of imparting the relevant skill set
                necessary to identify the flaws in business processes and make
                improvements for efficiency.
              </p>
              <VStack className="gap-4">
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>Gap Analysis</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>Enterprise Architecture</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>AGILE (SCRUM, Kanban, LESS)</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>Stakeholder Management</p>
                </HStack>
              </VStack>
            </VStack>
          </div>
        </div>

        <div
          className="w-full bg-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4"
          id="software_development"
        >
          <h3 className="text-center text-2xl font-bold">
            Software Development
          </h3>
          <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
            <div className="grid grid-cols-2 grid-rows-2  place-content-center">
              <Image
                src={appDev}
                className="object-cover object-center w-full"
                alt="courses"
                priority
              />
              <VStack className="bg-gray-900 items-center justify-around p-2 text-3xl lg:text-5xl text-slate-50">
                <FaMobileScreenButton />
                <p className="text-base font-semibold">Android &amp; iOS</p>
              </VStack>
              <Image
                src={appDev2}
                className="object-cover object-center w-full order-3"
                alt="courses"
                priority
              />
              <VStack className="bg-gray-900 items-center justify-around p-2 text-3xl lg:text-5xl text-slate-50">
                <FaMobileScreenButton />
                <p className="text-base font-semibold">
                  Web interactive services
                </p>
              </VStack>
            </div>
            <VStack className="text-lg gap-8">
              <p>
                This is seen as the entirety of all the processes and
                instructions given by programmers to their computers, with the
                intention of achieving set goals. Essentially, it is a roadmap
                by which programmers are able to create programs/software to
                solve specific problems. As such, this course intends to walk
                you through the life cycle of software creation, by providing
                the software development tools, programming languages, and
                processes required.
              </p>
            </VStack>
          </div>
        </div>

        <div
          className="w-full bg-slate-700 text-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4"
          id="product_management"
        >
          <h3 className="text-center text-2xl font-bold">
            Product Development
          </h3>
          <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
            <Image
              src={productDevImg}
              className="object-cover object-center w-full"
              alt="courses"
              priority
            />
            <VStack className="text-lg gap-8">
              <p>
                In a digitally-driven world, every business has become a
                technology company at its heart. With the massive uptake of
                Cloud in recent years, we need to prepare ourselves for the next
                upcoming macro trends. The DevOps mindset, which includes
                shifting approach from Project management to Product
                development, has already begun
              </p>
              <p>
                Professionals and businesses who are fully equipped with Product
                Development capabilities are likely to outperform those who
                remain behind.
              </p>
              <p>
                This comprehensive course is broad - covering many frameworks,
                tools, skills and principles.
              </p>
              <p>
                Each module is practically applicable in the field where we will
                be testing and stretching ourselves with live projects.
              </p>
              <p>It is highly collaborative and community-driven.</p>
              <p>
                It offers the option to obtain professional certification
                accreditation with an internationally recognised institution.
              </p>
            </VStack>
          </div>
        </div>

        <div
          className="w-full bg-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4"
          id="devops"
        >
          <h3 className="text-center text-2xl font-bold">DevOps</h3>
          <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
            <Image
              src={devOpsImg}
              className="object-cover object-center w-full order-2"
              alt="courses"
              priority
            />
            <VStack className="text-lg gap-8">
              <p>
                Being a combination of business development and operational
                processes, the core of their function is to increase an
                organizations ability to deliver services and applications a lot
                faster than traditional processes, thereby providing a
                competitive edge for their services and effectively serving the
                needs of their customers.
              </p>
              <p>
                This course aims to inform the importance of working smarter as
                opposed to harder, which is essence of DevOps.
              </p>
              <VStack className="gap-4">
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>DevOps Lifecycle</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>DevSecOps</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>AWS</p>
                </HStack>
                <HStack className="gap-4 items-center">
                  <FaCheckCircle />
                  <p>Azure Cloud</p>
                </HStack>
              </VStack>
            </VStack>
          </div>
        </div>

        <div
          className="w-full bg-slate-700 text-slate-50 p-4 py-8 flex flex-col justify-center items-center gap-4"
          id="scrum_master"
        >
          <h3 className="text-center text-2xl font-bold">
            Agile Coach / Scrum Master
          </h3>
          <div className="grid lg:grid-cols-2 container gap-4 place-items-center place-content-center">
            <Image
              src={scrumImg}
              className="object-cover object-center w-full order-2"
              alt="courses"
              priority
            />
            <VStack className="text-lg gap-8">
              <p>
                Successful software development goes hand-in-hand with concepts
                such as Lean Six Sigma, waste reduction, value stream mapping
                and process optimization. Agile teams use delivery frameworks
                such as SAFe, Nexus, Extreme Programming, Feature Driven
                Delivery, Dynamic Systems Development Method, Crystal, Scrum and
                Kanban.
              </p>
              <p>
                This course equips professionals and businesses with the
                principles, practices and terminology required to compete in the
                software development industry. The Advanced course (with
                optional certification with an internationally recognised
                institution) unlocks the potential to become a Professional
                Scrum Master or Professional Agile Coach.
              </p>
            </VStack>
          </div>
        </div>
      </VStack>
    </>
  );
}
