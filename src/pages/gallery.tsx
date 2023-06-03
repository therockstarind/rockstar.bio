import MetaData from "@components/MetaData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/OneDrive/ui/Tabs";
import { OnedriveFile, fetchMediaFiles } from "@lib/onedriveApi";
import React, { useState, useEffect } from "react";
import AllGallery from "@components/OneDrive/AllGalleryContent";
import PhotoGallery from "@components/OneDrive/PhotoGallery";
import VideoGallery from "@components/OneDrive/VideoGallery";
import { MdOutlineOndemandVideo } from "react-icons/md";
import pageMeta from "@content/meta";
import { HiPhotograph, HiViewGrid } from "react-icons/hi";

interface Props {
  allContent: OnedriveFile[];
}

export const Photos: React.FC<Props> = ({ allContent }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <MetaData
        title={pageMeta.gallery.title}
        description={pageMeta.gallery.description}
        previewImage={pageMeta.gallery.image}
        keywords={pageMeta.gallery.keywords}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="pageGallery font-inter max-w-6xl">
          <Tabs defaultValue="all">
            <TabsList className="space-x-2">
              <TabsTrigger value="all">
                <div className="flex items-center justify-center">
                  <HiViewGrid className="h-5 w-5 md:h-6 md:w-6" />
                  <p className="ml-2 md:block hidden">All</p>
                </div>
              </TabsTrigger>
              <TabsTrigger value="Photos">
                <div className="flex items-center justify-center">
                  <HiPhotograph className="h-5 w-5 md:h-6 md:w-6" />
                  <p className="ml-2 md:block hidden">Photos</p>
                </div>
              </TabsTrigger>
              <TabsTrigger value="videos">
                <div className="flex items-center justify-center">
                  <MdOutlineOndemandVideo className="h-5 w-5 md:h-6 md:w-6" />
                  <p className="ml-2 md:block hidden">Videos</p>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <AllGallery allContent={allContent} />
            </TabsContent>
            <TabsContent value="Photos">
              <PhotoGallery />
            </TabsContent>
            <TabsContent value="videos">
              <VideoGallery />
            </TabsContent>
          </Tabs>
        </section>
      )}
    </>
  );
};

export async function getStaticProps() {
  const files = await fetchMediaFiles();
  return {
    props: {
      allContent: files,
    },
  };
}

export default Photos;
