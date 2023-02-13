import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="py-10 px-2 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
      >
        {videos.map((video) => {
          return (
            <div key={video.id} className="w-full relative">
              <video id="component" src={video.src} type="video/mp4" controls />
              <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 w-full min-h-full bg-black/50">
                <div>Play</div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Video;
