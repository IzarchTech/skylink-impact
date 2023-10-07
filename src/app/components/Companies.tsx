import Image from "next/image";

import VStack from "./VStack";
import britishCouncilLogo from "@/app/assets/british-council.svg";
import barclaysLogo from "@/app/assets/barclays-logo.svg";
import capeGeminiLogo from "@/app/assets/capgemini-logo.svg";
import hsbcLogo from "@/app/assets/hsbc-logo.svg";
import ibmLogo from "@/app/assets/ibm.svg";
import nhsLogo from "@/app/assets/nhs-logo.svg";

function Companies() {
  return (
    <VStack className="py-20 px-4 min-h-[20rem] gap-12 container mx-auto">
      <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase lg:w-1/2 mx-auto text-slate-950 block">
        Companies where our candidates have secured roles
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
        <Image
          className="h-32"
          src={britishCouncilLogo}
          alt="British council logo"
        />
        <Image className="h-32" src={barclaysLogo} alt="Barclays logo" />
        <Image className="h-32" src={capeGeminiLogo} alt="Capegemini logo" />
        <Image className="h-32" src={hsbcLogo} alt="HSBC logo" />
        <Image className="h-32" src={ibmLogo} alt="IBM logo" />
        <Image className="h-32" src={nhsLogo} alt="NHS logo" />
      </div>
    </VStack>
  );
}

export default Companies;
