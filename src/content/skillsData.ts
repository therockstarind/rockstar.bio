import { SkillType } from "@lib/types";
import { FaJava } from "react-icons/fa"
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
  SiPhp,
  SiAndroidstudio,
  SiFlutter,
  SiKotlin,
  SiLaravel,
  SiVuedotjs,
  SiVultr,
  SiYarn,
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
  {
    name: "PHP",
    Icon: SiPhp,
  },
  {
    name: "Java",
    Icon: FaJava,
  },
  {
    name: "Flutter",
    Icon: SiFlutter,
  },
  {
    name: "Androidstudio",
    Icon: SiAndroidstudio,
  },
  {
    name: "Kotlin",
    Icon: SiKotlin,
  },
  {
    name: "Yarn",
    Icon: SiYarn,
  },
  {
    name: "Vultr",
    Icon: SiVultr,
  },
  {
    name: "Vue.js",
    Icon: SiVuedotjs,
  },
  {
    name: "Laravel",
    Icon: SiLaravel,
  },
];

export default skills;
