import React from "react";
import Seo from "@/components/Seo";
import GalleryCard from "@/components/OneDrive/GalleryCard";

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
          <GalleryCard />
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
