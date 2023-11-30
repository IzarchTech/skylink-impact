import CountUp from "react-countup";

import VStack from "./VStack";

type Props = {
  noOfTimes: number;
  title: string;
  delay?: number | null;
};

export default function Achivement({ noOfTimes, title, delay }: Props) {
  return (
    <div className="flex items-center justify-center p-4">
      <VStack className="items-center justify-center h-40 gap-2 lg:h-60 lg:w-60">
        <h3 className="text-5xl font-bold text-center">
          <CountUp duration={2.5} delay={delay} end={noOfTimes} useEasing />+
        </h3>
        <p className="text-center">{title}</p>
      </VStack>
    </div>
  );
}
