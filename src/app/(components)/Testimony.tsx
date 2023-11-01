"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Rating from "./Rating";

type TestimonyType = {
  name: string;
  rating: number;
  review: string;
};

const data: TestimonyType[] = [
  {
    name: "Greg Ebuka",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur soluta quia dolorum. Corporis obcaecati mollitia, temporibus eius quia tempora sit cum sapiente aut labore laborum, libero repellat laudantium magnam, culpa inventore odio facere assumenda autem commodi est qui laboriosam maxime! Provident rem architecto possimus.",
  },
  {
    name: "Ebuka Obi",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur soluta quia dolorum. Corporis obcaecati mollitia, temporibus eius quia tempora sit cum sapiente aut labore laborum, libero repellat laudantium magnam, culpa inventore odio facere assumenda autem commodi est qui laboriosam maxime! Provident rem architecto possimus.",
  },
  {
    name: "Chinenye Nwafor",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur soluta quia dolorum. Corporis obcaecati mollitia, temporibus eius quia tempora sit cum sapiente aut labore laborum, libero repellat laudantium magnam, culpa inventore odio facere assumenda autem commodi est qui laboriosam maxime! Provident rem architecto possimus.",
  },
  {
    name: "Linda Smith",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur soluta quia dolorum. Corporis obcaecati mollitia, temporibus eius quia tempora sit cum sapiente aut labore laborum, libero repellat laudantium magnam, culpa inventore odio facere assumenda autem commodi est qui laboriosam maxime! Provident rem architecto possimus.",
  },
  {
    name: "Jane Ebuka",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur soluta quia dolorum. Corporis obcaecati mollitia, temporibus eius quia tempora sit cum sapiente aut labore laborum, libero repellat laudantium magnam, culpa inventore odio facere assumenda autem commodi est qui laboriosam maxime! Provident rem architecto possimus.",
  },
  {
    name: "Ebuka Smith",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum nemo soluta maxime, nesciunt, quia laudantium rerum voluptatibus adipisci, ipsum porro eum praesentium. A ex ipsum, nostrum accusantium sapiente minus.",
  },
  {
    name: "John Obi",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur soluta quia dolorum. Corporis obcaecati mollitia, temporibus eius quia tempora sit cum sapiente aut labore laborum, libero repellat laudantium magnam, culpa inventore odio facere assumenda autem commodi est qui laboriosam maxime! Provident rem architecto possimus.",
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
        <source src="/assets/testimony.webm" />
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
              <Rating rating={data[currentIndex].rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0 absolute bg-[#1c1f21b8]" />
    </div>
  );
}
