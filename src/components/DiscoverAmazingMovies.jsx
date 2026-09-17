import { use } from "react";
import { FaArrowRight } from "react-icons/fa6";
import MovieGrid from "./MovieGrid";
import { Link } from "react-router";

const DiscoverAmazingMovies = ({ moviesPromise }) => {
  const movies = use(moviesPromise);

  return (
    <section className="bg-linear-to-t from-[#070f22] to-[#040915] py-12">
      <div className="container mx-auto text-white">
        <div className="mb-6 flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Discover Amazing Movies</h2>

            <p className="max-w-120 text-gray-400">
              From thrilling adventures to heartwarming dramas, find movies that
              match your mood.
            </p>
          </div>

          <Link
            to="/movies"
            className="group flex cursor-pointer items-center gap-2 text-[#7458f8] outline-none"
          >
            View All Movies{" "}
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <MovieGrid movies={movies} />
      </div>
    </section>
  );
};

export default DiscoverAmazingMovies;
