import { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { OnedriveFile, fetchMediaFiles } from "@lib/onedriveApi";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fromLeftChildren } from "@content/FramerMotionVariants";
import Modal from "./ui/Modal";
import DataLoadButton from "./ui/DataLoadButton";
import { BsPlayCircle } from "react-icons/bs";

interface VideoGalleryProps {
  //   files: OnedriveFile[];
}

interface VideoPlay {
  isPlay: boolean;
  mediaFile: OnedriveFile | null;
}

const VideoGallery: FC<VideoGalleryProps> = () => {
  const [videos, setVideos] = useState<OnedriveFile[] | null>([]);
  const [slicevideos, setSlicevideos] = useState<OnedriveFile[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const [loadCount, setLoadCount] = useState<number>(2);
  const [showplayVideo, setShowPlayVideo] = useState<VideoPlay>({
    isPlay: false,
    mediaFile: null,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    handleClick();
  }, [showplayVideo]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const videosData = await fetchMediaFiles();
        console.log(videosData, "videosData");
        const filtetvideos = videosData?.filter((vd) =>
          vd?.file?.mimeType.includes("video")
        );
        if (filtetvideos) {
          setVideos(filtetvideos);
          setSlicevideos(filtetvideos?.slice(0, 16));
        }
      } catch (error) {}
      setLoading(false);
    };

    fetchVideo();
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen flex mt-10 justify-center">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        Loading...
      </div>
    );
  if (!videos) return <p className="min-h-screen"></p>;

  let videoLength: number = 0;

  const handleLoadMore = async () => {
    setIsLoadMore(true);
    const sliceValue = videos.slice(loadCount * 16 - 16, loadCount * 16);
    if (sliceValue.length === 0) setButtonDisable(true);
    setSlicevideos((preSlice) => [...preSlice, ...sliceValue]);
    setLoadCount((pre) => pre + 1);

    setTimeout(() => setIsLoadMore(false), 800);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
        {slicevideos?.map((video, index) => {
          const { "@content.downloadUrl": url } = video;
          const isVideo = video?.file?.mimeType.includes("video");
          if (isVideo) videoLength = videoLength + 1;

          return (
            isVideo && (
              <motion.div
                key={index}
                onClick={() =>
                  setShowPlayVideo({
                    isPlay: true,
                    mediaFile: video,
                  })
                }
                variants={fromLeftChildren}
                className="relative shadow dark:shadow-gray-600 p-1 rounded-lg group transition-[opacity,transform] duration-100"
              >
                <div className="h-40 w-full relative rounded-lg overflow-hidden video-thumbnail">
                <video src={url} className="absolute top-0 left-0 w-full h-full object-cover" />
                  <BsPlayCircle 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 z-10 play-icon" 
                    style={{ objectFit: "contain" }}
                    color="rgba(255, 255, 255, 0.8)"
                  />
              </div>
          </motion.div>
            )
          );
        })}
      </div>

      {showplayVideo?.mediaFile && (
        <Modal mediaFile={showplayVideo.mediaFile} ref={buttonRef} />
      )}

      <DataLoadButton
        data={videos}
        handleLoadMore={handleLoadMore}
        isLoadMore={isLoadMore}
        buttonDisable={buttonDisable}
      />
    </div>
  );
};

export default VideoGallery;
