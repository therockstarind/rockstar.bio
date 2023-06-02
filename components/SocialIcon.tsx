import { Tooltip } from '@chakra-ui/react';
import React from 'react';
import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { RiTelegramLine, RiWhatsappLine } from "react-icons/ri";


interface SocialIconProps {
  link: string;
  icon: 'whatsapp' | 'github' | 'telegram';
  tooltipText: string;
  tooltipColor: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ link, icon, tooltipText, tooltipColor }) => {
  const iconMap = {
    whatsapp: RiWhatsappLine,
    github: VscGithub,
    telegram: RiTelegramLine,
  };

  const Icon = iconMap[icon];

  return (
    <Tooltip title={tooltipText} color={tooltipColor}>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div whileHover={{ scale: 1.2 }}>
        <Icon size={32} />
        </motion.div>
      </a>
    </Tooltip>
  );
};

export default SocialIcon;
