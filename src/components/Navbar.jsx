import { FaArrowRight } from "react-icons/fa6";
import { SiThemoviedatabase } from "react-icons/si";
import { Link, NavLink } from "react-router";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/movies",
    label: "Movies",
  },
  {
    path: "/about",
    label: "About",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-b-[#1e3665] bg-[#060d1b] py-1 backdrop-blur-2xl">
      <div className="container mx-auto flex items-center justify-between text-white">
        <h1 className="flex items-center text-xl font-bold">
          <SiThemoviedatabase className="mr-2 text-2xl" /> Movie
          <span className="text-yellow-400">Explorer</span>
        </h1>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-white" inline-block border-b-2 py-5 text-gray-400 ${isActive ? "border-b-yellow-500" : "border-b-transparent"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/movies"
          className="group flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-bold"
        >
          Browse Movies{" "}
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
