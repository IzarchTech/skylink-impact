import Image from "next/image";

import productDevImg from "@/app/assets/product_development.webp";
import VStack from "@/app/(components)/VStack";

export default function ProductManagementPage() {
  return (
    <>
      <div className="w-full relative">
        <Image
          src={productDevImg}
          className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
          alt="Product development"
          priority
        />
        <div className="inset-0 absolute bg-[#17191abd]" />
        <div className="inset-0 absolute z-10">
          <div className="container mx-auto min-h-full items-center justify-center flex flex-col gap-8">
            <h2 className="text-center text-slate-50 font-bold text-4xl uppercase">
              Product Development Services
            </h2>
          </div>
        </div>
      </div>

      <VStack className="w-full bg-slate-50 items-center justify-center px-4 py-8">
        <VStack className="lg:w-3/5 gap-3">
          <p>
            Our product development services utilize tools and frameworks to
            develop and launch successful IT products and services. We focus on
            defining product strategy, development, and market fit using tools
            like Trello and Asana.
          </p>

          <p>
            Our product development services are guided by a structured process
            that ensures successful product development, such as:
          </p>
          <VStack className="gap-1">
            <p>- Market Research</p>
            <p>- Strategy Development</p>
            <p>- Development and Testing</p>
            <p>- Launch and Monitoring</p>
          </VStack>
          <p>We ensure your product meets market demands and user needs.</p>
        </VStack>
      </VStack>
    </>
  );
}
