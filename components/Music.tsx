import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { motion } from 'framer-motion';
import { FcMusic } from 'react-icons/fc';

const audioFileUrl = '/music/audio.mp3';

const playIconVariants = {
  initial: {
    opacity: 0,
    rotate: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    rotate: 0,
    scale: 0,
  },
};

const pauseIconVariants = {
  initial: {
    opacity: 0,
    rotate: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    rotate: 0,
    scale: 0,
  },
};

export default function MusicPlayer() {
  const [sound] = useState(new Howl({ src: [audioFileUrl] }));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);

  useEffect(() => {
    setPlaying(true);
  }, []);

  useEffect(() => {
    sound.volume(volume);
  }, [sound, volume]);

  useEffect(() => {
    if (playing) {
      sound.play();
    } else {
      sound.pause();
    }
  }, [playing, sound]);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <motion.button onClick={togglePlaying}>
        {playing ? (
          <motion.div
            variants={pauseIconVariants}
            initial="initial"
            animate="visible"
            exit="hidden"
          >
            <FcMusic size={24} className="animate-[spin_7s_linear_infinite]" />
          </motion.div>
        ) : (
          <motion.div
            variants={playIconVariants}
            initial="initial"
            animate="visible"
            exit="hidden"
          >
            <FcMusic size={24} />
          </motion.div>
        )}
      </motion.button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className='hidden'
      />
    </div>
  );
}
