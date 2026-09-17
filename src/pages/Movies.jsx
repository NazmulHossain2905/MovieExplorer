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
        const res = await fetch("https://api.tvmaze.com/shows");
        const movies = await res.json();
        setMovies(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
            <form
              // onSubmit={handleOnSubmit}
              className="flex w-130 items-center gap-4 rounded-full border border-gray-700 bg-[#0c172f] px-4 py-2"
            >
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search for movies..."
                className="flex-1 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <span className="rounded bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-400">
                Press Enter
              </span>
            </form>

            <span className="text-sm font-medium text-gray-400">
              Total Movies: {filteredMovies.length}
            </span>
          </div>
        </div>

        {!loading && movies.length ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <h2 className="py-5 text-center font-bold tracking-widest text-gray-500 uppercase">
            Loading...
          </h2>
        )}
      </div>
    </div>
  );
};

export default Movies;

// import Navbar from "../components/Navbar";
// import MovieGrid from "../components/MovieGrid";
// import { FaSearch } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchedMovies, setSearchedMovies] = useState([]);

//   useEffect(() => {
//     const getMovies = async () => {
//       try {
//         const res = await fetch("https://api.tvmaze.com/shows");
//         const movies = await res.json();

//         setMovies(movies);
//         setSearchedMovies(movies); // Show all movies initially
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMovies();
//   }, []);

//   const handleOnSubmit = (e) => {
//     e.preventDefault();

//     const query = searchQuery.trim().toLowerCase();

//     // If search is empty, show all movies
//     if (!query) {
//       setSearchedMovies(movies);
//       return;
//     }

//     const filteredMovies = movies.filter((movie) =>
//       movie.name.toLowerCase().includes(query),
//     );

//     setSearchedMovies(filteredMovies);
//   };

//   const handleOnBackspace = (e) => {
//     if (e.key === "Backspace") {
//       const filteredMovies = movies.filter((movie) =>
//         movie.name.toLowerCase().includes(searchQuery.toLowerCase()),
//       );

//       setSearchedMovies(filteredMovies);
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="container mx-auto pt-6 pb-12 text-white">
//         <div className="mb-6 space-y-4">
//           <div className="space-y-1">
//             <h2 className="text-3xl font-bold">Browse Movies</h2>

//             <p className="text-gray-400">
//               Find your next favorite movie. Search by title and explore our
//               collection.
//             </p>
//           </div>

//           <div className="flex items-center justify-between">
//             <form
//               onSubmit={handleOnSubmit}
//               className="flex w-130 items-center gap-4 rounded-full border border-gray-700 bg-[#0c172f] px-4 py-2"
//             >
//               <FaSearch className="text-gray-500" />

//               <input
//                 type="text"
//                 placeholder="Search for movies..."
//                 className="flex-1 outline-none"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyUp={handleOnBackspace}
//               />

//               <span className="rounded bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-400">
//                 Press Enter
//               </span>
//             </form>

//             <span className="text-sm font-medium text-gray-400">
//               Total Movies: {searchedMovies.length}
//             </span>
//           </div>
//         </div>

//         {!loading ? (
//           <MovieGrid movies={searchedMovies} />
//         ) : (
//           <h2 className="py-5 text-center font-bold tracking-widest text-gray-500 uppercase">
//             Loading...
//           </h2>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Movies;
