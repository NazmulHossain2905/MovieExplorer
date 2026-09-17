import { FaStar } from "react-icons/fa6";
import IMG from "../assets/hero-bg.png";

const MovieCard = () => {
  return (
    <div className="group overflow-hidden rounded-2xl border-2 border-gray-800 bg-[#0a1123] transition-transform hover:-translate-y-1.5">
      <img
        src={IMG}
        alt=""
        className="h-50 w-full object-cover object-center transition-transform group-hover:scale-105"
      />

      <div className="space-y-4 p-4">
        <div>
          <h4 className="font-bold">The Last Horizon</h4>
          <span className="inline-block text-xs text-gray-400">2024</span>
          <p className="mt-1 flex items-center gap-1 text-xs">
            <FaStar className="text-yellow-500" /> 8.4
          </p>
        </div>

        <button className="w-full cursor-pointer rounded-full border-2 border-gray-800 bg-[#0e1933] py-1.5 text-xs font-medium text-slate-300 transition-transform hover:scale-105">
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
