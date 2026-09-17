import MovieCard from "./MovieCard";

const MovieGrid = ({ movies = [] }) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
