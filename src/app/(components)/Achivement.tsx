import CountUp from "react-countup";

import VStack from "./VStack";

type Props = {
  noOfTimes: number;
  title: string;
  delay?: number | null;
};

export default function Achivement({ noOfTimes, title, delay }: Props) {
  return (
    <div className="flex justify-center items-center p-4">
      <VStack className="gap-2 h-40 lg:h-60 lg:w-60 justify-center items-center">
        <h3 className="font-bold text-5xl text-center">
          <CountUp duration={2.5} delay={delay} end={noOfTimes} />+
        </h3>
        <p className="text-center">{title}</p>
      </VStack>
    </div>
  );
}
