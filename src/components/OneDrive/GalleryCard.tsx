import React, { useEffect, useState } from 'react';
import { fetchMediaFiles, OnedriveFile } from '@lib/onedriveApi';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';

const Skeleton: React.FC = () => (
  <div className="w-full h-48 md:h-64 bg-gray-300 animate-pulse rounded-2xl group-hover:scale-105 transition-transform overflow-hidden" />
);

const GalleryCard: React.FC = () => {
  const pageSize = 10;
  const [files, setFiles] = useState<OnedriveFile[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [slideStartX, setSlideStartX] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMediaFiles = async () => {
      const mediaFiles = await fetchMediaFiles(0, pageSize);
      setFiles(mediaFiles);
      setLoading(false);
    };

    getMediaFiles();
  }, []);

  const handleMediaClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePopupClose = () => {
    setSelectedIndex(null);
  };

  const handleNextMedia = () => {
    if (selectedIndex !== null && selectedIndex < files.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePreviousMedia = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
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
      handlePreviousMedia();
    } else if (deltaX < -sensitivity) {
      setIsSliding(false);
      handleNextMedia();
    }
  };

  const handleTouchEnd = () => {
    setIsSliding(false);
  };

  const loadMore = async () => {
    setLoading(true);
    const offset = files.length;
    const mediaFiles = await fetchMediaFiles(offset, pageSize);
    setFiles(prevFiles => [...prevFiles, ...mediaFiles]);
    setLoading(false);
  };
  

  return (
    <><div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {files.map((file, index) => (
        <div
          key={file.id}
          className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100"
          onClick={() => handleMediaClick(index)}
        >
          {file.file.mimeType.startsWith('image/') ? (
            <Image
              src={file.thumbnail || file['@content.downloadUrl']}
              alt={file.name}
              width={600}
              height={720}
              className="w-full h-48 md:h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform overflow-hidden"
            />
          ) : (
            <div className="relative w-full h-48 md:h-64 rounded-2xl group-hover:scale-105 transition-transform overflow-hidden">
              <video src={file.thumbnail || file['@content.downloadUrl']} className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-80 transition-opacity duration-200 group-hover:opacity-100" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}

      {loading && Array(pageSize).fill(0).map((_, index) => (
        <Skeleton key={`skeleton-${index}`} />
      ))}

      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          {files[selectedIndex].file.mimeType.startsWith('image/') ? (
            <img src={files[selectedIndex]['@content.downloadUrl']} alt="Full Image" className="max-w-full max-h-full" />
          ) : (
            <video src={files[selectedIndex]['@content.downloadUrl']} className="max-w-full max-h-full" controls />
          )}
          <button
            className="absolute top-1/2 left-4 bg-white dark:bg-gray-600 text-black dark:text-white rounded-full p-2 transform -translate-y-1/2"
            onClick={handlePreviousMedia}
            disabled={selectedIndex === 0}
          >
            <RiArrowLeftSLine size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 bg-white dark:bg-gray-600 text-black dark:text-white rounded-full p-2 transform -translate-y-1/2"
            onClick={handleNextMedia}
            disabled={selectedIndex === files.length - 1}
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
    <div className="flex justify-center mt-4">
        {files.length > 0 && files.length % pageSize === 0 && (
          <button
            className={`px-4 py-2 mx-2 ${loading ? 'bg-gray-300' : 'bg-gray-800'} hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md text-white dark:text-white`}
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        )}

        {files.length > 0 && files.length % pageSize !== 0 && (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-4">
            No More Files
          </p>
        )}
    </div>
  </>
  );
};

export default GalleryCard;
