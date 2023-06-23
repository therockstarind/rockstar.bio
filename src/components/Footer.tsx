import Link from "next/link";
import Image from "next/image";
import { FadeContainer } from "../content/FramerMotionVariants";
import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import Spotify from "./Card/Spotify";

export default function Footer({

}: {
}) {
  
  return (
    <footer className=" text-gray-600 dark:text-gray-400/50 w-screen font-inter mb-14 print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
      >
        <Spotify />
        <SocialIcon />
        <Link
            href="https://wakatime.com/@rockstar"
        >
            <Image
              alt="wakatime"
              src='https://wakatime.com/badge/user/a634381e-edc6-48e4-a267-5a64225c7dee.svg'
              width={150}
              height={20}
              className="mx-auto mb-6"
            />
        </Link>
      </motion.div>

    </footer>
  );
}