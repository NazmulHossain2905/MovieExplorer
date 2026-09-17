import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";
import { FaSearch } from "react-icons/fa";

const Movies = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto pt-6 pb-12 text-white">
        <div className="mb-6 space-y-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold">Browse Movies</h2>

            <p className="text-gray-400">
              Find your next favorite movie. Search by title and explore our
              collection.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <form className="flex w-130 items-center gap-4 rounded-full border border-gray-700 bg-[#0c172f] px-4 py-1.5">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search for movies..."
                className="flex-1 outline-none"
              />

              <span className="rounded bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-400">
                Press Enter
              </span>
            </form>

            <span className="text-sm font-medium text-gray-400">
              Total Movies: 24
            </span>
          </div>
        </div>

        <MovieGrid movies={Array(12).fill(null)} />
      </div>
    </div>
  );
};

export default Movies;
