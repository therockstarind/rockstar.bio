import React from "react";
import useSWR from "swr";
import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import fetcher from "@lib/fetcher";
import MetaData from "@components/MetaData";
import Track from "@components/Stats/Track";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import { SpotifyTrack } from "@lib/types";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { motion } from "framer-motion";
import pageMeta from "@content/meta";
import TMDBList from "@/components/Card/tmdbCard";

type Stats = {
  title: string;
  value: string;
};

export default function Stats({
}: {}) {
  const { data: topTracks } = useSWR("/api/stats/tracks", fetcher);

  return (
    <>
      <MetaData
        title={pageMeta.media.title}
        description={pageMeta.media.description}
        previewImage={pageMeta.media.image}
        keywords={pageMeta.media.keywords}
      />

      <section className="pageTop font-inter">
        <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={opacityVariant}
            className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200"
          >
            Movies & TV Series
          </motion.h3>
            <AnimatedDiv
              variants={FadeContainer}
            >
                <TMDBList />
            </AnimatedDiv>
        </div>
        <AnimatedText
          variants={opacityVariant}
          className="mt-4 text-gray-700 dark:text-gray-300"
        >
          <span className="font-bold">Note:</span> Ratings are based on our own impressions.
        </AnimatedText>

        {/* Spotify top songs */}
        <div className="font-barlow mt-5">
        <AnimatedHeading
            variants={opacityVariant}
            className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200"
          >
            My Top streams songs
          </AnimatedHeading>

          <AnimatedText
            variants={opacityVariant}
            className="mt-4 text-gray-700 dark:text-gray-300"
          >
            <span className="font-semibold">
              {topTracks ? (
                topTracks[0].title
              ) : (
                <span className="bg-white dark:bg-darkSecondary h-6 w-20"></span>
              )}
            </span>{" "}
            is the most streamed song of mine in last 4 weeks. Here's my top
            tracks on Spotify updated daily.
          </AnimatedText>
          <div className="flex flex-col my-10 gap-0 font-barlow">
            {topTracks ? (
              topTracks?.map((track: SpotifyTrack, index: number) => (
                <Track
                  key={index}
                  id={index}
                  url={track.url}
                  title={track.title}
                  coverImage={track.coverImage.url}
                  artist={track.artist}
                />
              ))
            ) : (
              <LoadingSongs />
            )}
          </div>
        </div>   
      </section>
    </>
  );
}

// Loading Components
function LoadingSongs() {
  return (
    <>
      {Array.from(Array(10).keys()).map((item) => (
        <div
          key={item}
          className="bg-gray-100 h-[80.8px] first:h-[81.6px] first:md:h-[85.6px] md:h-[84.8px]  dark:bg-darkPrimary  border-l first:border-t border-r border-b  border-gray-300 dark:border-neutral-600 p-4 font-barlow flex items-center gap-5 overflow-hidden relative xs:pl-16 md:!pl-20 "
        >
          <div className="absolute left-4 md:left-6 transform origin-center font-inter tracking-wider hidden xs:inline-flex">
            #{item + 1}
          </div>

          <div className="relative w-12 bg-white dark:bg-darkSecondary h-12 transform origin-center animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <p className="animate-pulse w-40 h-6 md:h-[28px] bg-white dark:bg-darkSecondary"></p>
            <p className="animate-pulse w-28 h-4 md:h-6 bg-white dark:bg-darkSecondary delay-125"></p>
          </div>
        </div>
      ))}
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
    },
  };
}
