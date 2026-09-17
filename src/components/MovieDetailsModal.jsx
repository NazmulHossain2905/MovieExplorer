import { FaCalendar, FaStar, FaTag, FaTypo3 } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const MovieDetailsModal = ({ open, onClose, backdropBlur = true, movie }) => {
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
      <div className="rounded-xlshadow-2xl relative z-10 w-full max-w-5xl">
        <div className="flex gap-4 overflow-hidden rounded-2xl border-2 border-gray-800 bg-[#0a1123]">
          <span
            onClick={onClose}
            className="absolute top-2 right-2 flex size-8 cursor-pointer items-center justify-center rounded transition-colors hover:bg-gray-800"
          >
            <IoMdClose />
          </span>

          <div className="relative h-150 w-100 overflow-hidden">
            <img
              src={movie?.image?.medium}
              alt={movie?.name}
              className="h-full w-full object-cover"
            />

            <span className="absolute bottom-3 left-3 rounded-full bg-[#00000030] px-2.5 py-1 text-xs font-medium backdrop-blur-md">
              {movie?.language}
            </span>
          </div>

          <div className="flex-1 space-y-4 p-4">
            <div className="space-y-5">
              <div>
                <h4 className="text-3xl font-bold">{movie?.name}</h4>
                <p className="mt-2 flex items-center gap-1 text-lg font-bold text-yellow-500">
                  <FaStar className="text-yellow-500" />{" "}
                  <span>
                    {movie?.rating?.average}{" "}
                    <span className="text-xs text-gray-500">/10</span>
                  </span>
                </p>
              </div>

              <div className="space-y-3">
                <span className="flex gap-2 text-xs text-gray-400">
                  <FaCalendar /> {movie?.premiered}
                </span>
                <span className="flex items-center gap-2 text-xs text-gray-400">
                  <FaTag />{" "}
                  <ul className="flex gap-1.5">
                    {movie?.genres?.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </span>
                <span className="flex gap-2 text-xs text-gray-400">
                  <FaTypo3 /> Type: {movie?.type}
                </span>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold">Overview</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: movie?.summary,
                  }}
                  className="text-gray-300"
                />
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute right-4 bottom-4 cursor-pointer rounded-full border-2 border-gray-800 bg-[#0e1933] px-5 py-1.5 text-xs font-medium text-slate-300 transition-transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
