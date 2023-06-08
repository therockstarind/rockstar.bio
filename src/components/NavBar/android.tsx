import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdPerson, IoMdFilm, IoMdSettings, IoMdImages } from 'react-icons/io';
import { motion } from 'framer-motion';
import { BsAndroid } from 'react-icons/bs';

const Android: React.FC = () => {
  const router = useRouter();

  const navLinks = [
    { name: 'Home', icon: <BsAndroid size={24} /> },
    { name: 'About', icon: <IoMdPerson size={24} /> },
    { name: 'Media', icon: <IoMdFilm size={24} /> },
    { name: 'Uses', icon: <IoMdSettings size={24} /> },
    { name: 'Gallery', icon: <IoMdImages size={24} /> },
  ];

  const linkVariants = {
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <nav className="fixed bottom-3 w-full left-1/2 right-1/2 transform -translate-x-1/2 border dark:border-gray-800 rounded-lg flex flex-col justify-center items-center h-16 bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 max-w-2xl">
      <div className="flex justify-around w-full">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.name.toLowerCase() === 'home' ? '/' : `/${link.name.toLowerCase()}`}
          >
            <motion.div
              className={`flex flex-col items-center justify-center text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 ${
                router.pathname === `/${link.name.toLowerCase()}` ? 'text-blue-500 dark:text-blue-500' : ''
              }`}
              whileTap="tap"
              variants={linkVariants}
            >
              <div className="flex flex-col justify-center items-center">
                <div>
                  {link.icon}
                </div>
                <div className="text-xs">
                  {link.name}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Android;
