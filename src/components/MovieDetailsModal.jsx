import { FaCalendar, FaStar, FaTag, FaUser } from "react-icons/fa6";
import IMG from "../assets/hero-bg.png";
import { IoMdClose } from "react-icons/io";

const MovieDetailsModal = ({ open, onClose, backdropBlur = true }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 ${
          backdropBlur ? "backdrop-blur-sm" : ""
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="rounded-xlshadow-2xl relative z-10 w-full max-w-3xl">
        <div className="flex gap-4 overflow-hidden rounded-2xl border-2 border-gray-800 bg-[#0a1123]">
          <span className="absolute top-2 right-2 flex size-8 cursor-pointer items-center justify-center rounded transition-colors hover:bg-gray-800">
            <IoMdClose />
          </span>

          <img
            src={IMG}
            alt=""
            className="h-125 w-75 object-cover object-center"
          />

          <div className="space-y-4 p-4">
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-bold">The Last Horizon</h4>
                <p className="text-md mt-1 flex items-center gap-1 font-bold text-yellow-500">
                  <FaStar className="text-yellow-500" />{" "}
                  <span>
                    8.4 <span className="text-xs text-gray-500">/10</span>
                  </span>
                </p>
              </div>

              <div className="space-y-3">
                <span className="flex gap-2 text-xs text-gray-400">
                  <FaCalendar /> 2024-06-14
                </span>
                <span className="flex gap-2 text-xs text-gray-400">
                  <FaTag /> Adventure, Drama, Fantasy
                </span>
                <span className="flex gap-2 text-xs text-gray-400">
                  <FaUser /> Director: Elias Carter
                </span>
              </div>

              <div className="space-y-1">
                <h5 className="font-semibold">Overview</h5>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero nostrum maxime voluptatibus ipsam magni, sequi aut
                  voluptatem debitis perspiciatis, molestiae necessitatibus vero
                  aliquid soluta minus iste dolor qui amet distinctio, earum
                  adipisci doloribus? Eius eum, suscipit adipisci dolores rem
                  nam.
                </p>
              </div>
            </div>

            <button className="absolute right-4 bottom-4 cursor-pointer rounded-full border-2 border-gray-800 bg-[#0e1933] px-5 py-1.5 text-xs font-medium text-slate-300 transition-transform hover:scale-105">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
