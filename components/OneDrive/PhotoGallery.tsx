import { FC } from "react";
import { MediaCard } from "./MediaCard";
import { useState, useEffect } from "react";
import { OnedriveFile, fetchMediaFiles } from "@lib/onedriveApi";
import { Loader2 } from "lucide-react";
import DataLoadButton from "./ui/DataLoadButton";

interface PhotoGalleryProps {
  //   files: OnedriveFile[];
}

const PhotoGallery: FC<PhotoGalleryProps> = () => {
  const [photos, setPhotos] = useState<OnedriveFile[] | null>([]);
  const [slicePhotos, setSlicePhotos] = useState<OnedriveFile[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const [loadCount, setLoadCount] = useState<number>(2);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const photosData = await fetchMediaFiles();
        const filtetPhotos = photosData.filter(
          (pd) => !pd?.file?.mimeType.includes("video")
        );
        if (filtetPhotos) {
          setPhotos(filtetPhotos);
          setSlicePhotos(filtetPhotos?.slice(0, 16));
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
  if (!photos) return <p className="min-h-screen"></p>;

  const handleLoadMore = async () => {
    setIsLoadMore(true);
    const sliceValue = photos.slice(loadCount * 16 - 16, loadCount * 16);
    // console.log(loadCount * 16 - 16, loadCount * 16);
    // console.log(sliceValue);
    if (sliceValue.length === 0) setButtonDisable(true);
    setSlicePhotos((preSlice) => [...preSlice, ...sliceValue]);
    setLoadCount((pre) => pre + 1);

    setTimeout(() => setIsLoadMore(false), 800);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
        {slicePhotos?.map((photo, index) => (
          <MediaCard key={index} mediaFile={photo} />
        ))}
      </div>

      <DataLoadButton
        data={photos}
        handleLoadMore={handleLoadMore}
        isLoadMore={isLoadMore}
        buttonDisable={buttonDisable}
      />
    </div>
  );
};

export default PhotoGallery;
