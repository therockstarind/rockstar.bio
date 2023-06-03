
import { VscGithub } from "react-icons/vsc";
import { RiTelegramLine, RiYoutubeLine } from 'react-icons/ri';
import { motion } from "framer-motion";
import Tooltip from "./Tooltip/Tooltip";

function SocialIcon() {
  const socialIcons = [
    {
      href: 'https://www.youtube.com/@TheRockStarIND',
      icon: <RiYoutubeLine />,
      tooltip: 'YouTube',
    },
    {
      href: 'https://github.com/therockstarind',
      icon: <VscGithub />,
      tooltip: 'Github',
    },
    {
      href: 'https://t.me/RockStarIND',
      icon: <RiTelegramLine />,
      tooltip: 'Telegram',
    }
  ];

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-center gap-x-8 text-[32px] text-black dark:text-white mb-4'>
        {socialIcons.map(({ href, icon, tooltip }) => (
          <a href={href} target='_blank' rel='noopener noreferrer' key={href}>
            <motion.div whileHover={{ scale: 1.2 }}>
            <Tooltip interactive={false} tipChildren={tooltip}>
              {icon}
            </Tooltip>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
      </>
  );
}

export default SocialIcon;