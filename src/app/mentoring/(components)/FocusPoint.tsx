import HStack from "@/app/(components)/HStack";
import {FaCheckCircle} from "react-icons/fa";

export default function FocusPoint({point}: { point: string }) {
    return <HStack className="gap-2 items-center">
        <div className="fill-slate-700">
            <FaCheckCircle/>
        </div>
        <p>{point}</p>
    </HStack>
}