"use client"
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {motion} from "framer-motion";

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
import {useEffect, useRef, useState} from "react";

function Companies() {
    return (
        <VStack className="py-20 px-4 min-h-[20rem] gap-12 container mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase lg:w-1/2 mx-auto text-slate-950 block">
                Companies where our candidates have secured roles
            </h2>
            <ScrollingImages/>
        </VStack>
    );
}

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

const IMAGE_WIDTH = 300;

function ScrollingImages() {
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(() => Math.floor(IMAGES.length / 2));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (IMAGES.length + 1))
        }, 1200);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative p-4 w-2/3">
            <div className="flex overflow-x-hidden items-center justify-center" ref={galleryRef}
                 style={{
                     width: `${IMAGES.length * IMAGE_WIDTH}px`,
                     transform: `translateX(-${currentIndex * IMAGE_WIDTH}px)`
                 }}>
                <motion.div
                    key={-1}
                    className="w-80 p-5"
                    initial={{opacity: 0, x: IMAGE_WIDTH}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -IMAGE_WIDTH}}
                    transition={{ease: "easeOut", duration: 0.5, delay: 0.2}}
                >
                    <Image src={IMAGES[IMAGES.length - 1].path} alt={`${IMAGES[IMAGES.length - 1].title}_logo`}
                           width={IMAGE_WIDTH} layout="responsive"/>
                </motion.div>
                {IMAGES.map(({path, title}, index) => (
                    <motion.div
                        key={`index_${title}_logo`}
                        className="w-80 p-5"
                        initial={{opacity: 0, x: -IMAGE_WIDTH}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: IMAGE_WIDTH}}
                        transition={{ease: "easeOut", duration: 0.5}}
                    >
                        <Image src={path} alt={`${title}_logo`} width={IMAGE_WIDTH} layout="responsive"/>
                    </motion.div>
                ))}
                <motion.div
                    key={IMAGES.length}
                    className="w-80 p-5"
                    initial={{opacity: 0, x: -IMAGE_WIDTH}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: IMAGE_WIDTH}}
                    transition={{ease: "easeOut", duration: 0.5, delay: 0.3}}
                >
                    <Image src={IMAGES[0].path} alt={`${IMAGES[0].title}_logo`} width={IMAGE_WIDTH} layout="responsive"/>
                </motion.div>
            </div>

        </div>
    );
}

export default Companies;
