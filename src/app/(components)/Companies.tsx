import {StaticImport} from "next/dist/shared/lib/get-img-props";

import VStack from "./VStack";
import nhsLogo from "@/app/assets/nhs-logo.svg";
import allianzLogo from "@/app/assets/allianz-logo.svg";
import amazonLogo from "@/app/assets/amazon-logo.svg";
import argosLogo from "@/app/assets/Argos_logo.svg";
import autoTraderLogo from "@/app/assets/auto-trader-logo.webp";
import avivaLogo from "@/app/assets/aviva-logo.svg";
import chevronLogo from "@/app/assets/chevron-logo.svg";
import natWestLogo from "@/app/assets/Natwest_logo.svg";
import santanderLogo from "@/app/assets/santander_logo.svg";
import unitedNationsLogo from "@/app/assets/united-nations-logo.svg";
import vitalityLogo from "@/app/assets/vitality-logo.webp";
import ImageGallery from "@/app/(components)/ImageGallery";

const IMAGES: { title: string, path: StaticImport | string }[] = [
    {
        title: "Allianz",
        path: allianzLogo
    },
    {
        title: "Amazon",
        path: amazonLogo
    },
    {
        title: "Argos",
        path: argosLogo
    },
    {
        title: "AutoTrader",
        path: autoTraderLogo
    },
    {
        title: "Aviva",
        path: avivaLogo
    },
    {
        title: "Chevron",
        path: chevronLogo
    },
    {
        title: "NatWest",
        path: natWestLogo
    },
    {
        title: "NHS",
        path: nhsLogo
    },
    {
        title: "Santander",
        path: santanderLogo
    },
    {
        title: "United Nations",
        path: unitedNationsLogo
    },
    {
        title: "Vitality",
        path: vitalityLogo
    }
];

function Companies() {
    return (
        <VStack className="py-20 px-4 min-h-[20rem] gap-12 container mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase lg:w-1/2 mx-auto text-slate-950 block">
                Companies where our candidates have secured roles
            </h2>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 justify-items-center place-items-center">
                <ImageGallery images={IMAGES}/>
            </div>
        </VStack>
    );
}


export default Companies;
