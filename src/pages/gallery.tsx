import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/OneDrive/Tabs";
import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiPhotograph, HiViewGrid } from "react-icons/hi";
import Seo from "@/components/Seo";
import PhotoCard from "@/components/OneDrive/PhotoCard";
import VideoCard from "@/components/OneDrive/VideoCard";
import MediaCard from "@/components/OneDrive/MediaCard";
import { All, Photos, Videos } from "@/components/SVG/TabsIcon";

export default function Gallery({
}: {}) {
  return (
    <>
      <Seo
        title="Gallery | Rock Star 💕"
        description="Here you watch the all photos & videos of our life Journy . . ."
        keywords={[ "photos", "videos", "rockstar.bio", "therocktarind", "rocktarind", "rdrive"]}
        url="https://rockstar.bio/gallery/"
        ogImage="https://rockstar.bio/og-img/gallery.png" 
      />
        <section className="pageGallery font-inter max-w-6xl">
          <Tabs defaultValue="all">
            <TabsList className="space-x-2">
              <TabsTrigger value="all">
                <div className="flex items-center justify-center">
                  <All />
                </div>
              </TabsTrigger>
              <TabsTrigger value="Photos">
                <div className="flex items-center justify-center">
                  <Photos />
                </div>
              </TabsTrigger>
              <TabsTrigger value="videos">
                <div className="flex items-center justify-center">
                  <Videos />
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <MediaCard />
            </TabsContent>
            <TabsContent value="Photos">
              <PhotoCard />
            </TabsContent>
            <TabsContent value="videos">
              <VideoCard />
            </TabsContent>
          </Tabs>
        </section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
    },
  };
}
