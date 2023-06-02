import Link from "next/link";
import Image from "next/image";
import {
  FadeContainer,
  opacityVariant,
} from "../content/FramerMotionVariants";
import { motion } from "framer-motion";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { Song } from "@lib/types";
import SocialIcon from "./SocialIcon";

export default function Footer({

}: {
}) {
  const { data: currentSong } = useSWR("/api/now-playing", fetcher);
  
  return (
    <footer className=" text-gray-600 dark:text-gray-400/50 w-screen font-inter mb-14 print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
      >
        <div>
          {currentSong?.isPlaying ? (
            <WhenPlaying song={currentSong} />
          ) : (
            <NotPlaying />
          )}
        </div>
        <motion.div
          variants={opacityVariant}
          className="flex items-center gap-2 justify-center text-black dark:text-white my-5 space-x-2"
        >
          <SocialIcon link="https://wa.me/919927241144?text=Hello..." icon="whatsapp" tooltipText="WhatsApp" tooltipColor="green" />
          <SocialIcon link="https://github.com/therockstarind" icon="github" tooltipText="GitHub" tooltipColor="magenta" />
          <SocialIcon link="https://t.me/RockStarIND" icon="telegram" tooltipText="Telegram" tooltipColor="blue" />
        </motion.div>
        <motion.div
          variants={opacityVariant}
          className="items-center text-lg font-bold mb-5 justify-center text-black dark:text-white space-x-4 hidden"
        >
          <h1>Works</h1> <span>|</span> <h1>Projects</h1>
        </motion.div>
      </motion.div>

    </footer>
  );
}


function NotPlaying() {
  return (
    <div className="flex items-center gap-2 flex-row-reverse sm:flex-row justify-between sm:justify-start">
      <SiSpotify className="w-6 h-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <div className="font-semibold md:text-lg text-black dark:text-white">
          Not Playing
        </div>
        <span className="hidden md:inline-flex">—</span>
        <p className="text-gray-500 text-xs sm:text-sm">Spotify</p>
      </div>
    </div>
  );
}

function WhenPlaying({ song }: { song: Song }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold dark:text-gray-300 animate-pulse">Now Listening . . . </h4>
      <Link
        href={song.songUrl}
        className="flex items-center justify-between bg-gray-200 dark:bg-darkSecondary  p-3 sm:p-4 rounded-lg"
      >
        <div className=" flex items-center gap-2">
          <div className="w-10 h-10 animate-[spin_7s_linear_infinite]">
            <Image
              alt={song.title}
              src={song.albumImageUrl}
              width={50}
              height={50}
              quality={100}
              blurDataURL={song.albumImageUrl}
              className='h-full w-full rounded-full object-cover object-top'
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <h3 className="font-semibold md:text-lg text-black dark:text-white animate-">
              {song.title}
            </h3>
            <span className="hidden md:inline-flex dark:text-gray-300">—</span>

            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              {song.artist}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SiSpotify className="w-6 h-6 text-green-500" />
        </div>
      </Link>
    </div>
  );
}
