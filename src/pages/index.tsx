import SkillSection from "@components/Home/SkillSection";
import Image from "next/image";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariants";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import { ProfileImage } from "@utils/utils";
import getRSS from "@lib/generateRSS";
import generateSitemap from "@lib/sitemap";
import { motion } from "framer-motion";
import MDXContent from "@lib/MDXContent";
import React from "react";
import { FrontMatter } from "@lib/types";
import Link from "next/link";
import Greeting from "@components/Greeting";
import Pets from "@components/Pets";
import Seo from "@/components/seo";

export default function Home({ }: { blogs: FrontMatter[] }) {
  const pets = [
    { id: 1, url: '/img/zuse.png' },
    { id: 2, url: '/img/Jarvis.png' }
  ];


  return (
    <>
      <Seo
        title="Rock Star 💕"
        description="Hi 🙋 Welcome To The Boring Introduction. I would love to make a lot friends and find them all around the world 🌍. btw I like to live alone with my own self and please don’t ask me why I like that🙊🙊🙊...."
        keywords={["rockstar.bio", "therocktarind", "rocktarind", "rdrive"]}
        url="https://rockstar.bio"
        ogImage="https://rockstar.bio/og-img/home.png" 
      />
      <div className="relative dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid place-content-center py-20"
        >
          <div className="w-full relative mx-auto flex flex-col items-center gap-10">
            <motion.div
              variants={popUp}
              className="relative w-64 h-64 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={ProfileImage}
                className="rounded-full shadow filter"
                width={933}
                height={933}
                alt="Profile Image"
                priority
              />
            </motion.div>

            <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl lg:text-6xl font-bold"
                >
                  Rock Star
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                >
                  Software - Hardware
                </motion.p>
                <Greeting />
              </div>

              <motion.p
                variants={opacityVariant}
                className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center"
              >
               Hi 🙋 Welcome To The Boring Introduction. <br/>
               I would love to make a lot friends and find them all around the world 🌍<br/>
                btw I like to live alone with my own self and please don’t ask me why I like that🙊🙊🙊....
              </motion.p>
            </div>

            <Link
              href="/about"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-white dark:hover:bg-neutral-800 outline-none  active:scale-95 transition-transform"
            >
              <p>Read More</p>
            </Link>
          </div>
        </motion.section>

        <div>
          <SkillSection />
          <Pets pets={pets} />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = new MDXContent("posts").getAllPosts(3);
  await getRSS();
  await generateSitemap();

  return {
    props: { blogs },
  };
}
