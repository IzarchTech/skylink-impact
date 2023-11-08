import {FaStar} from "react-icons/fa6";

export default function Rating({rating}: { rating: number }) {
    return (
        <div className="flex gap-1">
            <FaStar className="text-yellow-400"/>
            <FaStar className={rating >= 2 ? "text-yellow-400" : "text-gray-300"}/>
            <FaStar className={rating >= 3 ? "text-yellow-400" : "text-gray-300"}/>
            <FaStar className={rating >= 4 ? "text-yellow-400" : "text-gray-300"}/>
            <FaStar className={rating === 5 ? "text-yellow-400" : "text-gray-300"}/>
        </div>
    );
}
