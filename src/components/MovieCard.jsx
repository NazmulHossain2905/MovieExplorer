import { FaStar } from "react-icons/fa6";
import MovieDetailsModal from "./MovieDetailsModal";
import { useState } from "react";
import { LuCalendarCheck } from "react-icons/lu";

const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group overflow-hidden rounded-2xl border-2 border-gray-800 bg-[#0a1123] transition-transform">
        <div className="relative h-125 w-full overflow-hidden">
          <img
            src={movie.image?.medium}
            alt={movie.name}
            className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
          />

          <span className="absolute bottom-3 left-3 rounded-full bg-[#00000030] px-2.5 py-1 text-xs font-medium backdrop-blur-md">
            {movie?.language}
          </span>
        </div>

        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <h4 className="text-lg font-bold">{movie?.name}</h4>
            <div className="flex items-center justify-between">
              {movie?.rating?.average && (
                <span className="flex items-center gap-1 text-xs">
                  <FaStar className="text-yellow-500" />{" "}
                  {movie?.rating?.average}
                </span>
              )}
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <LuCalendarCheck className="mb-0.5" /> {movie?.premiered}
              </span>
            </div>
          </div>

          <ul className="flex gap-1.5">
            {movie?.genres?.map((item) => (
              <li
                key={item}
                className="rounded-full bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-400"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full cursor-pointer rounded-full border-2 border-gray-800 bg-[#0e1933] py-2 text-xs font-medium text-slate-300 transition-transform hover:scale-105"
          >
            See Details
          </button>
        </div>
      </div>

      {/* Movie details */}

      <MovieDetailsModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        movie={movie}
      />
    </>
  );
};

export default MovieCard;
