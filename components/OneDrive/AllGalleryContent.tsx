import { FC } from "react";
import { MediaCard } from "./MediaCard";
import { OnedriveFile } from "@lib/onedriveApi";
import { motion } from "framer-motion";
import { fromLeftChildren } from "@content/FramerMotionVariants";
import { useState, useEffect, useRef } from "react";
import Modal from "./ui/Modal";
import DataLoadButton from "./ui/DataLoadButton";
import { BsPlayCircle } from "react-icons/bs";

interface AllGalleryProps {
  allContent: OnedriveFile[];
}

interface VideoPlay {
  isPlay: boolean;
  mediaFile: OnedriveFile | null;
}

const AllGallery: FC<AllGalleryProps> = ({ allContent: data }) => {
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const [loadCount, setLoadCount] = useState<number>(2);
  const [allContent] = useState<OnedriveFile[]>(data);
  const [sliceAllContent, setSliceAllContent] = useState<OnedriveFile[]>(
    data?.slice(0, 16)
  );
  const [showplayVideo, setShowPlayVideo] = useState<VideoPlay>({
    isPlay: false,
    mediaFile: null,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      document.body.style.overflow = "auto";
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    handleClick();
  }, [showplayVideo]);

  const handleLoadMore = async () => {
    setIsLoadMore(true);
    const sliceValue = allContent.slice(loadCount * 16 - 16, loadCount * 16);
    if (sliceValue.length === 0) setButtonDisable(true);
    setSliceAllContent((preSlice) => [...preSlice, ...sliceValue]);
    setLoadCount((pre) => pre + 1);

    setTimeout(() => setIsLoadMore(false), 800);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
        {/* add "type:"video" on your db content  */}
        {sliceAllContent?.map((content, index) => {
          const { "@content.downloadUrl": url } = content;

          return content?.file?.mimeType.includes("video") ? (
            <motion.div
              key={index}
              onClick={() =>
                setShowPlayVideo({
                  isPlay: true,
                  mediaFile: content,
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

          ) : (
            <MediaCard key={index} mediaFile={content} />
          );
        })}
      </div>

      {showplayVideo?.mediaFile && (
        <Modal mediaFile={showplayVideo.mediaFile} ref={buttonRef} />
      )}

      <DataLoadButton
        data={allContent}
        handleLoadMore={handleLoadMore}
        isLoadMore={isLoadMore}
        buttonDisable={buttonDisable}
      />
    </div>
  );
};

export default AllGallery;
