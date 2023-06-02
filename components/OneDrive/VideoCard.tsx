import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fromLeftChildren } from "@content/FramerMotionVariants";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default function VideoCard({
  url,
  isControls = true,
}: {
  url: string;
  isControls?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setPlayer] = useState<Plyr>();

  useEffect(() => {
    if (videoRef.current) {
      const plyrPlayer = new Plyr(videoRef.current);
      setPlayer(plyrPlayer);
    }
  }, [videoRef]);

  return (
    <motion.div
      variants={fromLeftChildren}
      className="relative rounded-sm group transition-[opacity,transform] duration-100 z-1"
    >
      <div
        className={`${
          isControls ? "aspect-video" : "aspect-square"
        } relative rounded-sm overflow-hidden`}
      >
        <video
          ref={videoRef}
          className={`plyr__video-embed ${
            isControls ? "aspect-video" : "aspect-square"
          } rounded-lg transition-transform`}
          controls={isControls}
        >
          <source src={url} />
        </video>
      </div>
    </motion.div>
  );
}
