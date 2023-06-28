import React from "react";
import Seo from "@/components/Seo";
import GalleryCard from "@/components/OneDrive/GalleryCard";
import { motion } from "framer-motion";
import { FadeContainer, opacityVariant } from "@/content/FramerMotionVariants";
import AnimatedDiv from "@/components/FramerMotion/AnimatedDiv";
import { UserName } from "@/utils/utils";

export default function Gallery({}: {}) {
  
  return (
    <>
      <Seo
        title={`Gallery | ${UserName}`}
        description="Here you watch the all photos & videos of our life Journy . . ."
        keywords={[ "photos", "videos", "rockstar.bio", "therocktarind", "rocktarind", "rdrive"]}
        url="https://rockstar.bio/gallery/"
        ogImage="https://rockstar.bio/og-img/gallery.png" 
      />
        <section className="pageGallery font-inter max-w-6xl">
          <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={opacityVariant}
            className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200"
          >
            Photos & Videos
          </motion.h3>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={opacityVariant}
            className="text-sm"
          >
            Note: all the content in the original quality so must be need better internet to consume it.
          </motion.h3>
          <AnimatedDiv
              variants={FadeContainer}
            >
                <GalleryCard />
            </AnimatedDiv>
          </div>
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
