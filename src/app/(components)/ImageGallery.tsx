"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export default function ImageGallery({images}: { images: { path: StaticImport | string, title: string }[] }) {
    return (
        images.map(({path, title}, index) => (
            <motion.div
                key={`index_${title}_logo`}
                initial={{opacity: 0, y: -100, scale: 0}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 100, scale: 0}}
                transition={{ease: "easeOut", duration: 0.25, delay: index / 10}}
            >
                <Image src={path} alt={`${title}_logo`} className="h-20 object-contain"/>
            </motion.div>
        ))
    );
}