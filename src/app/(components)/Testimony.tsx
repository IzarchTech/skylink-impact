"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import Rating from "./Rating";

type TestimonyType = {
    name: string;
    rating: number;
    review: string;
};

const data: TestimonyType[] = [
    {
        name: "Fiyin Adeniyi",
        rating: 4,
        review:
            "Going on this program was life-changing! The courses were well structured with relevant modules and hands-on project work. The amount of support that was offered during and after the program was second to none! If you’re looking for a career change in IT then I highly recommend SkyLink!",
    },
    {
        name: "Oghenenyerhovwo Runo Umukoro",
        rating: 4,
        review:
            "Mentoring under SkyLink opened my eyes to new possibilities I had never considered in the past. What I have learnt has provided me a path with a lot of options to choose from and increased my self-confidence.",
    },
    {
        name: "Louisa Ogbummor",
        rating: 3,
        review:
            "When I enrolled for training with SkyLink, I was skeptical and scared as I didn't have any IT background. However, I was encouraged by the tutoring methods. The mentors came down to my level and worked me through testing steps and techniques until the end. \n" +
            "Their tutoring technique, while intense also comes with jokes and friendly advice which made learning under them easy and fun. \n" +
            " \n" +
            "Having the opportunity to learn from SkyLink has made a substantial change in my career and I am grateful for their continuous mentoring",
    },
    {
        name: "Dady Steve",
        rating: 5,
        review:
            "I'm most grateful for the opportunity of studying with the SkyLink BA class of 2021. The experience was a very beautiful one, and learning under the experience and patient tutoring of the mentors was an added benefit.  \n" +
            "SkyLink BA classes exposed and broadened my horizon, by opening me up to a different aspect of the Tech industry, which was achieved through multiple practical and interactive classes. These made learning easy. \n" +
            " \n" +
            "Studying with them has helped me have a solid personal development plan that will guide me to achieving my goals in both short  and long term.",
    },
    {
        name: "Malachy",
        rating: 5,
        review:
            "I had a great learning and mentoring experience at the training which gave me a boost to my confidence at software testing now.\n" +
            "\n" +
            "Will always recommend Skylink.",
    },
    {
        name: "Akpukaoji",
        rating: 5,
        review:
            "I learnt a lot during my training with Skylink. The mentors are very patient and exceptional at training. Their passion and dedication to what they do, is second to none. They gave me the nudge, right push and motivation I needed for my career.\n" +
            "\n" +
            "Skylink has also been supporting my career growth since my 1st job till date",
    },
    {
        name: "Obinna Eze",
        rating: 5,
        review:
            "Taking up Software Testing training at SkyLink was the most important decision I have made. The training was structured, detailed and well delivered by considerate and dedicated mentors. The skills acquired has been tremendously utilised and I implore anyone keen on career change to go with SkyLink.",
    },
];

export default function Testimony() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-full relative h-[30rem] lg:min-h-[40rem]">
            <video loop autoPlay className="w-full h-full object-cover">
                <source src="/assets/testimony.webm"/>
            </video>

            <div className="text-white absolute inset-0 z-10">
                <div className="container min-h-full items-center justify-center flex flex-col mx-auto gap-8 p-4">
                    <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl">
                        Candidate Testimonials
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4 justify-start">
                            <p>
                                Customer satisfaction is our major goal. See what our clients
                                are saying about our services.
                            </p>
                            <Link
                                href="/"
                                className="p-4 bg-yellow-600 hover:bg-yellow-400 w-max mx-auto rounded-lg"
                            >
                                Reviews
                            </Link>
                        </div>
                        <div>
                            <p className="italic">{data[currentIndex].review}</p>
                            <p className="mt-4">{data[currentIndex].name}</p>
                            <Rating rating={data[currentIndex].rating}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inset-0 absolute bg-[#1c1f21b8]"/>
        </div>
    );
}
