"use client";

import {StaticImport} from "next/dist/shared/lib/get-img-props";

import ImageGallery from "@/app/(components)/ImageGallery";
import VStack from "@/app/(components)/VStack";

import appiumLogo from "@/app/assets/appium-logo.svg";
import confluenceLogo from "@/app/assets/confluence-logo.svg";
import eclipseLogo from "@/app/assets/eclipse-logo.svg";
import espressoLogo from "@/app/assets/espresso-logo.png";
import intellijLogo from "@/app/assets/intellij-logo.svg";
import jiraLogo from "@/app/assets/jira-Logo.svg";
import microsoftAzureLogo from "@/app/assets/microsoft_azure-logo.svg";
import postmanLogo from "@/app/assets/postman-logo.svg";
import powerBiLogo from "@/app/assets/power_bi-logo.svg";
import pytestLogo from "@/app/assets/pytest-logo.svg";
import roboElectricLogo from "@/app/assets/robo-electric-logo.png";
import seleniumLogo from "@/app/assets/selenium-logo.svg";
import visualStudioCodeLogo from "@/app/assets/visual-studio-code-logo.svg";
import xrayLogo from "@/app/assets/xray-logo.svg";

const IMAGES: { path: string | StaticImport, title: string }[] = [
    {
        path: appiumLogo,
        title: "Appium"
    },
    {
        path: confluenceLogo,
        title: "Confluence"
    },
    {
        path: eclipseLogo,
        title: "Eclipse"
    },
    {
        path: espressoLogo,
        title: "Espresso"
    },
    {
        path: intellijLogo,
        title: "IntelliJ"
    },
    {
        path: jiraLogo,
        title: "Jira"
    },
    {
        path: microsoftAzureLogo,
        title: "Microsoft Azure"
    },
    {
        path: postmanLogo,
        title: "Postman"
    },
    {
        path: powerBiLogo,
        title: "Power BI"
    },
    {
        path: pytestLogo,
        title: "Pytest"
    },
    {
        path: roboElectricLogo,
        title: "Robo-Electric"
    },
    {
        path: seleniumLogo,
        title: "Selenium"
    },
    {
        path: visualStudioCodeLogo,
        title: "Visual Studio Code"
    },
    {
        path: xrayLogo,
        title: "XRay"
    },
];
export default function ToolsWeWorkWith() {
    return (
        <VStack className="py-20 px-4 min-h-[20rem] gap-12 container mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase lg:w-1/2 mx-auto text-slate-950 block">
                Tools We Work With
            </h2>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 justify-items-center place-items-center">
                <ImageGallery images={IMAGES}/>
            </div>
        </VStack>
    )
        ;
}