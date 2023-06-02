/* Importing Modules */
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FadeContainer,
  hamFastFadeContainer,
  popUp,
} from "../content/FramerMotionVariants";
import { useDarkMode } from "../context/darkModeContext";
import { navigationRoutes } from "../utils/utils";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import MobileNav from "./MobileNav";
import MusicPlayer from "./Music";


/* TopNavbar Component */
export default function TopNavbar() {
  const navRef = useRef<HTMLDivElement>(null);

  /*  Using to control animation as I'll show the name to the mobile navbar when you scroll a bit
   * demo: https://i.imgur.com/5LKI5DY.gif
   */
  const control = useAnimation();
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode, changeDarkMode } = useDarkMode();


  /* To Lock  the Scroll when user visit the mobile nav page */
  function handleClick() {
    setNavOpen(!navOpen);
  }

  return (
    <div
      className="w-full fixed dark:text-white top-0 flex items-center justify-between bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 px-4 py-[10px] sm:px-6 z-50 print:hidden"
      ref={navRef}
    >
      {/* Mobile Navigation Hamburger and MobileMenu */}
      <AnimatePresence>
        <MobileMenu links={navigationRoutes} handleClick={handleClick} />
      </AnimatePresence>

      <Link href="/" className="mr-3" aria-label="Link to Home Page">
      <img src="/img/logo.png" alt={`Rock Star`} width="40" height="40"  />
        <div className="w-full sm:!hidden">
          <motion.p
            initial="hidden"
            animate={control}
            variants={{
              hidden: { opacity: 0, scale: 1, display: "none" },
              visible: { opacity: 1, scale: 1, display: "inline-flex" },
            }}
            className="font-sarina"
          >
            Rock Star
          </motion.p>
        </div>
      </Link>

      {/* Top Nav list */}
      <motion.nav className="hidden sm:flex z-10 md:inset-0 md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
          {navigationRoutes.slice(0, 5).map((link, index) => {
            return <NavItem key={index} href={`/${link}`} text={link} />;
          })}
        </motion.div>
      </motion.nav>

      {/* DarkMode Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={popUp}
        className="cursor-pointer flex space-x-6"
      >
        <MusicPlayer />
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={changeDarkMode}
          size={24}
        />
      </motion.div>
    </div>
  );
}

// NavItem Container
function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link
      className={`${
        isActive
          ? "font-bold text-gray-800 dark:text-gray-100"
          : " text-gray-600 dark:text-gray-300"
      } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-black/10  dark:hover:bg-neutral-700/50 rounded-md`}
      href={href === "/home" ? "/" : href}
    >
      <motion.p className="capitalize" variants={popUp}>
        {text}
      </motion.p>
    </Link>
  );
}

// Hamburger Button

// Mobile navigation menu
const MobileMenu = ({
}: {
  links: string[];
  handleClick: () => void;
}) => {
  return (
    <motion.div
      className="fixed font-normal rounded-lg z-10 sm:hidden"
      variants={hamFastFadeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <MobileNav />
</motion.div>
  );
};
