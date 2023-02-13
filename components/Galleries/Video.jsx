import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GrPlay } from "react-icons/gr";

const Video = () => {
  const videos = [
    {
      id: 1,
      src: "video/video-1.mp4",
    },
    {
      id: 2,
      src: "video/video-2.mp4",
    },
    {
      id: 3,
      src: "video/video-3.mp4",
    },
    {
      id: 4,
      src: "video/video-4.mp4",
    },
    {
      id: 6,
      src: "video/video-6.mp4",
    },
    {
      id: 7,
      src: "video/video-7.mp4",
    },
    {
      id: 5,
      src: "video/video-5.mp4",
    },
  ];

  const [videoPlaying, setVideoPlaying] = useState({});

  const handlePlayPause = (index) => {
    setVideoPlaying({
      ...videoPlaying,
      [index]: !videoPlaying[index],
    });
  };

  useEffect(() => {
    Object.entries(videoPlaying).forEach(([index, playing]) => {
      const videoElement = document.getElementById(`component-${index}`);
      if (playing) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    });
  }, [videoPlaying]);

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="py-10 px-2 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
      >
        {videos.map((video, index) => {
          return (
            <div key={video.id} className="w-full relative">
              <video
                id={`component-${index}`}
                src={video.src}
                type="video/mp4"
                controls
              />
              <div
                onClick={() => handlePlayPause(index)}
                className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 w-full min-h-full "
              >
                {videoPlaying[index] ? (
                  ""
                ) : (
                  <div className="bg-white cursor-pointer shadow-xl shadow-zinc-800 w-14 h-14 text-center flex items-center justify-center p-4 rounded-full">
                    <GrPlay size={24} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Video;
