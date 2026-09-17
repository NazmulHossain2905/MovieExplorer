import MovieCard from "./MovieCard";

const MovieGrid = ({ movies = [] }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
