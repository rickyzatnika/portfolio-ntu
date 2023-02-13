import { useState } from "react";
import Photo from "./Photo";
import Video from "./Video";

const Galleries = () => {
  const [activeButton, setActiveButton] = useState("photo");

  return (
    <>
      <div className="w-full h-full  flex items-center flex-col justify-center gap-20 py-20">
        <div className="flex items-center gap-4 justify-center ">
          <div className="relative">
            <button
              className={`relative py-2 px-7 rounded    transition-all duration-300 ease-linear ${
                activeButton === "photo"
                  ? "border border-zinc-200 top-3 right-3 text-zinc-800 bg-white/60"
                  : "bg-zinc-300 top-0 right-0"
              }`}
              onClick={() => setActiveButton("photo")}
            >
              Photo
            </button>
            <div className="absolute rounded top-0 left-0 right-0 bottom-0 -z-10  bg-zinc-700"></div>
          </div>

          <div className="relative">
            <button
              className={`relative py-2 px-7 rounded    transition-all duration-300 ease-linear ${
                activeButton === "video"
                  ? "border border-zinc-200 top-2 right-2 text-zinc-800 bg-white/60"
                  : "bg-zinc-300 top-0 right-0"
              }`}
              onClick={() => setActiveButton("video")}
            >
              Video
            </button>
            <div className="absolute rounded top-0 left-0 right-0 bottom-0 -z-10  bg-zinc-700"></div>
          </div>
        </div>
        {activeButton === "photo" && <Photo />}
        {activeButton === "video" && <Video />}
      </div>
    </>
  );
};

export default Galleries;
