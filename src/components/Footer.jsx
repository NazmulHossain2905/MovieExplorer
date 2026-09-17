import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import { SiThemoviedatabase } from "react-icons/si";

const socialLinks = [
  {
    path: "https://github.com",
    icon: <FaGithub />,
  },
  {
    path: "https://x.com",
    icon: <BsTwitterX />,
  },
  {
    path: "https://youtube.com",
    icon: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-gray-800 bg-[#070e1b] py-5">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div>
          <h3 className="flex items-center text-lg font-bold">
            <SiThemoviedatabase className="mr-2 text-xl" /> Movie
            <span className="text-yellow-400">Explorer</span>
          </h3>

          <span className="text-xs text-gray-400">
            Movies bring people together.
          </span>
        </div>

        <ul className="flex gap-5">
          {socialLinks.map((link) => (
            <li key={link.path}>
              <a className="text-gray-400" href={link.path}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>

        <span className="text-sm text-gray-400">
          &copy; 2026 MovieExplorer. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
