import React from "react";
import { OnedriveFile } from "@lib/onedriveApi";
import { Image } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { fromLeftChildren } from "@content/FramerMotionVariants";
import VideoCard from "./VideoCard";

interface Props {
  id: string;
  url: string;
  alt: string;
}

const PhotoCard: React.FC<Props> = ({ id, url, alt }) => (
  <motion.div
    key={id}
    variants={fromLeftChildren}
    className="relative shadow dark:shadow-gray-600 p-1 rounded-lg group transition-[opacity,transform] duration-100"
  >
    <div className="h-40 w-full relative rounded-lg overflow-hidden">
      <Image
        className="object-center object-cover"
        src={url}
        alt={alt}
        height="100%"
        width="100%"
        style={{ height: "100%" }}
      />
    </div>
  </motion.div>
);

interface MediaCardProps {
  mediaFile: OnedriveFile;
}

export const MediaCard: React.FC<MediaCardProps> = ({ mediaFile }) => {
  const { id, "@content.downloadUrl": url, name, file } = mediaFile;

  if (file.mimeType.includes("image")) {
    return <PhotoCard id={id} url={url} alt={name} />;
  }

  else if (file.mimeType.includes("video")) {
  return <VideoCard url={url} />;
  }

  else {
    console.error("Unknown media file type", mediaFile);
    return null;
  }
};
