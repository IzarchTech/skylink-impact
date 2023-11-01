import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export default function CourseCard({
  path,
  src,
  title,
}: {
  src: StaticImageData;
  title: string;
  path: string;
}) {
  return (
    <div className="bg-stone-100 lg:w-96 flex flex-col rounded-lg shadow-md pb-4">
      <Image className="h-48 object-cover object-top" src={src} alt={title} />
      <Link
        href={path}
        className="py-2 px-4 rounded-t-lg border-slate-900 max-w-max mx-auto mt-3 rounded-md border hover:bg-slate-900 hover:text-stone-100"
      >
        {title}
      </Link>
    </div>
  );
}
