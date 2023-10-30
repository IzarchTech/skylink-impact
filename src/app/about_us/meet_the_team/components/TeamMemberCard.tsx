import {ReactNode} from "react";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

import VStack from "@/app/components/VStack";

interface Props {
    name: string,
    position: string,
    img: string | StaticImport,
    children: ReactNode
}
export default function TeamMemberCard({img, name, position, children}: Props){
    return (
        <VStack className="shadow-lg rounded-lg pb-4 lg:w-3/4">
            <VStack className="px-4">
                <div className="mx-auto h-60 w-60 rounded-full shadow-md bg-slate-950 p-2">
                    <Image src={img} alt={name}
                           className="object-center object-contain h-full rounded-full"/>
                </div>
                <p className="font-bold capitalize text-lg">{name}</p>
                <p className="text-sm font-light italic pb-4">{position}</p>
                {children}
            </VStack>
        </VStack>
    );
}