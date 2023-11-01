import { FaStar } from "react-icons/fa6";

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={`rating ${index}`} className="text-yellow-400" />
      ))}
    </div>
  );
}
