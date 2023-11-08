import Link from "next/link";
import VStack from "@/app/(components)/VStack";
import HStack from "@/app/(components)/HStack";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    image: StaticImport | string;
}

export default function InfoCard({title, description, image}: Props) {
    return (
        <Link href={`/consulting/${title.toLowerCase().replaceAll(" ", "_")}`}
              className="gap-4 bg-slate-50 shadow-md rounded-lg border border-transparent duration-75 ease-out hover:border-slate-300 h-full">
            <HStack className="items-center justify-center px-2 py-3 gap-2">
                <div className="border-2 border-slate-200 p-1">
                    <Image className="object-center object-cover w-32 h-32" src={image} alt={title}/>
                </div>
                <VStack className="flex-1 pr-2">
                    <h3 className="text-2xl font-medium underline">{title}</h3>
                    <p className="text-left">{description}</p>
                </VStack>
            </HStack>

        </Link>
    );
}