import { SkillType } from "@lib/types";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiTypescript,
  SiReact,
} from "react-icons/si";

const skills: SkillType[] = [
  {
    name: "HTML",
    Icon: SiHtml5,
  },
  {
    name: "CSS",
    Icon: SiCss3,
  },
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    name: "React.js",
    Icon: SiReact,
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    name: "MySQL",
    Icon: SiMysql,
  },
  {
    name: "Git",
    Icon: SiGit,
  },

];

export default skills;
