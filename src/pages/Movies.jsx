import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const url = searchQuery.trim()
          ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`
          : "https://api.tvmaze.com/shows";

        const res = await fetch(url);
        const data = await res.json();

        setMovies(searchQuery.trim() ? data.map((item) => item.show) : data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [searchQuery]);

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 pt-6 pb-12 text-white">
        <div className="mb-6 space-y-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold">Browse Movies</h2>

            <p className="text-gray-400">
              Find your next favorite movie. Search by title and explore our
              collection.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <form className="flex w-130 items-center gap-4 rounded-full border border-gray-700 bg-[#0c172f] px-4 py-2">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search for movies..."
                className="flex-1 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <span className="hidden text-sm font-medium text-gray-400 md:block">
              Total Movies: {movies.length}
            </span>
          </div>
        </div>

        {!loading && movies.length ? (
          <MovieGrid movies={movies} />
        ) : (
          <h2 className="py-5 text-center font-bold tracking-widest text-gray-500 uppercase">
            Loading...
          </h2>
        )}
      </div>
    </>
  );
};

export default Movies;
