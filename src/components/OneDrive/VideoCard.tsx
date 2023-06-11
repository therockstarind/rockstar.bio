import React, { useEffect, useState } from 'react';
import { fetchMediaFiles, OnedriveFile } from '@lib/onedriveApi';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from 'react-icons/ri';

const VideoCard: React.FC = () => {
  const [files, setFiles] = useState<OnedriveFile[]>([]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [slideStartX, setSlideStartX] = useState<number | null>(null);

  useEffect(() => {
    const getMediaFiles = async () => {
      const mediaFiles = await fetchMediaFiles();
      const videoFiles = mediaFiles.filter(file => file.file.mimeType.startsWith('video/'));
      setFiles(videoFiles);
    };

    getMediaFiles();
  }, []);

  const handleVideoClick = (index: number) => {
    setSelectedVideoIndex(index);
  };

  const handlePopupClose = () => {
    setSelectedVideoIndex(null);
  };

  const handleNextVideo = () => {
    if (selectedVideoIndex !== null && selectedVideoIndex < files.length - 1) {
      setSelectedVideoIndex(selectedVideoIndex + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (selectedVideoIndex !== null && selectedVideoIndex > 0) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsSliding(true);
    setSlideStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSliding) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - (slideStartX || 0);
    const sensitivity = 50;

    if (deltaX > sensitivity) {
      setIsSliding(false);
      handlePreviousVideo();
    } else if (deltaX < -sensitivity) {
      setIsSliding(false);
      handleNextVideo();
    }
  };

  const handleTouchEnd = () => {
    setIsSliding(false);
  };

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {files.map((file, index) => (
        <div
          key={file.id}
          className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100"
          onClick={() => handleVideoClick(index)}
        >             
          <video
            src={file.thumbnail || file["@content.downloadUrl"]}
            className="w-full h-48 md:h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform overflow-hidden"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white opacity-80 transition-opacity duration-200 group-hover:opacity-100"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 5v14l11-7z"
              />
            </svg>
          </div>
        </div>       
      ))}

      {selectedVideoIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <video
            src={files[selectedVideoIndex]["@content.downloadUrl"]}
            className="max-w-full max-h-full"
            controls
          />
          <button
            className="absolute top-1/2 left-4 bg-white dark:bg-gray-600 text-black dark:text-white rounded-full p-2 transform -translate-y-1/2"
            onClick={handlePreviousVideo}
            disabled={selectedVideoIndex === 0}
          >
            <RiArrowLeftSLine size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 bg-white dark:bg-gray-600 text-black dark:text-white rounded-full p-2 transform -translate-y-1/2"
            onClick={handleNextVideo}
            disabled={selectedVideoIndex === files.length - 1}
          >
            <RiArrowRightSLine size={24} />
          </button>
          <button
            className="absolute top-4 right-4 bg-white dark:bg-gray-600 text-black dark:text-white rounded-full p-2"
            onClick={handlePopupClose}
          >
            <RiCloseLine size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
