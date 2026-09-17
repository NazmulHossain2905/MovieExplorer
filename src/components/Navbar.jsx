import { FaArrowRight } from "react-icons/fa6";
import { SiThemoviedatabase } from "react-icons/si";

const links = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#movies",
    label: "Movies",
  },
  {
    path: "#about",
    label: "About",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 border-b border-b-[#1e3665] bg-[#060d1b] py-1 backdrop-blur-2xl">
      <div className="container mx-auto flex items-center justify-between text-white">
        <h1 className="flex items-center text-xl font-bold">
          <SiThemoviedatabase className="mr-2 text-2xl" /> Movie
          <span className="text-yellow-400">Explorer</span>
        </h1>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                className="inline-block py-5 text-gray-400 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="group flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-bold">
          Browse Movies{" "}
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
