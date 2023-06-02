import { opacityVariant } from '@content/FramerMotionVariants';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface Pet {
  id: number;
  url: string;
}

interface PetsProps {
  pets: Pet[];
}

const Pets: React.FC<PetsProps> = ({ pets }) => {
  const [currentPetIndex, setCurrentPetIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPetIndex((prevState) =>
        prevState === pets.length - 1 ? 0 : prevState + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [pets]);

  return (
    <div className='mx-5'>
                  <motion.h1
                  variants={opacityVariant}
                  className="w-full font-bold text-4xl font-inter"
                >
                 Buddies
                </motion.h1>
      <img className="mx-auto pb-4" src={pets[currentPetIndex].url} alt="Pet's" width={300} height={300}/>
    </div>
  );
};

export default Pets;
