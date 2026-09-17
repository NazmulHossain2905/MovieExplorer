import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DiscoverAmazingMovies from "../components/DiscoverAmazingMovies";
import Footer from "../components/Footer";
import { Suspense } from "react";

const getMovies = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const movies = await res.json();
  return movies.slice(0, 4);
};

const moviesPromise = getMovies();

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense
        fallback={
          <h2 className="py-5 text-center font-bold tracking-widest text-gray-500 uppercase">
            Loading...
          </h2>
        }
      >
        <DiscoverAmazingMovies moviesPromise={moviesPromise} />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
