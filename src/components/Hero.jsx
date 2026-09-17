import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import HeroBGImage from "../assets/hero-bg.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.7) 30%, transparent) ,url(${HeroBGImage})`,
      }}
      className="flex min-h-[80vh] items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto flex flex-col items-start gap-8">
        <div className="space-y-5">
          <span className="inline-block text-xs font-bold tracking-widest text-[#ac83e4] uppercase">
            Discover • Explore • Enjoy
          </span>
          <h1 className="text-7xl font-black text-white">
            Your Next Favorite <br />
            <span className="text-[#7866f2]">Movie</span> Awaits
          </h1>
        </div>

        <p className="max-w-125 text-lg font-medium text-gray-400">
          Explore a world of amazing movies. Discover new releases, read
          detailed information and find your next favorite film
          <br />
          -- all in one place.
        </p>

        <Link
          to={"/movies"}
          className="group mt-3 flex cursor-pointer items-center gap-3 rounded-full bg-linear-to-r from-yellow-500 to-yellow-300 px-5 py-3 font-bold text-black"
        >
          <IoSearch className="text-2xl" /> Explore Movies{" "}
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </header>
  );
};

export default Hero;
