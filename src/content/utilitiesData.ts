import { FcGoogle } from "react-icons/fc";
import {
  SiIntel,
  SiSamsung,
  SiSeagate,
  SiVercel,
  SiPrettier,
  SiPnpm,
  SiYarn,
  SiSpotify,
  SiNotepadplusplus,
  SiAsus,
  SiLogitech,
  SiAcer,
  SiNokia,
  SiXiaomi,
  SiVivaldi,
  SiApple,
  SiHp
} from "react-icons/si";
import {
  BsWindows,
  BsGithub,
} from "react-icons/bs";
import { FaGitAlt, FaSearch } from "react-icons/fa";
import SVG from "@components/SVG";
import { Utilities } from "@lib/types";

const utilities: Utilities = {
  title: "Uses",
  description:
    "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
  lastUpdate: "Feb 13, 2023",
  data: [
    {
      title: "System",
      data: [
        {
          name: "HP X360",
          description: "HP X360 1030 G3 Laptop",
          Icon: SiHp,
          link: "https://www.amazon.in/HP-EliteBook-x360-Touchscreen-Notebook/dp/B07FN5L8Q9",
        },
        {
          name: "P8H61-MX R2.0",
          description: "ASUS P8H61-MX R2.0 motherboard",
          Icon: SiAsus,
          link: "https://www.amazon.com/Asus-P8H61-MX-R2-0-2-0-Mainboard/dp/B008RPZ2G2",
        },
        {
          name: "i7",
          description: "Intel Core i7 3770 3nd Generation 3.90 GHz",
          Icon: SiIntel,
          link: "https://www.amazon.in/Intel-i7-3770-Processor-Turbo-3-90GHz/dp/B09PMLW3ZZ",
        },
        {
          name: "Mouse Keyboard",
          description: "Logitech MK220 Wireless Keyboard Mouse",
          Icon: SiLogitech,
          link: "https://www.amazon.in/Logitech-MK220-Wireless-Keyboard-Mouse/dp/B008QS7JN4",
        },
        {
          name: "16TB HDD",
          description: "Seagate 16TB HDD Exos X16 For RDRIVE Data Store",
          Icon: SiSeagate,
          link: "https://www.amazon.in/Seagate-256MB-3-5-Inch-Enterprise-ST16000NM001G/dp/B07SPFPKF4",
        },
        {
          name: "4TB HDD",
          description: "Seagate 4TB For Windows C Drive",
          Icon: SiSeagate,
          link: "https://www.amazon.in/Seagate-IronWolf-Internal-Hard-Drive/dp/B09RMRKC9P",
        },
        {
          name: "2TB HDD",
          description: "Seagate 2TB HDD For Personal Data Store",
          Icon: SiSeagate,
          link: "https://www.amazon.in/Seagate-Barracuda-2TB-HDD-ST2000DM005/dp/B07GWRP5LN",
        },
        {
          name: "8GB2X RAM",
          description: "Samsung 8GB, DDR3 PC3-12800, Desktop RAM",
          Icon: SiSamsung,
          link: "https://www.amazon.in/Samsung-M378B1G73QH0-CK0-Original-8GB/dp/B00G1H3U9Y",
        },
        {
          name: "Acer 32inch Moniter",
          description: "Acer 32inch Moniter",
          Icon: SiAcer,
          link: "https://www.amazon.in/Acer-XZ396Q-Monitor-Speakers-Features/dp/B09RZR8YKQ/",
        },
        {
          name: "Windows 11",
          description: "Operating System",
          Icon: BsWindows,
          link: "https://www.microsoft.com/software-download/windows11",
        },
      ],
    },

    {
      title: "Mobile",
      data: [
        {
          name: "Pixel 4a",
          description: "Google Pixel 4a (Just Black, 128 GB)  (6 GB RAM)",
          Icon: FcGoogle,
          link: "https://www.flipkart.com/google-pixel-4a-just-black-128-gb/p/itm023b9677aa45d",
        },
        {
          name: "iPhone X",
          description: "iPhone X Silver - 256GB",
          Icon: SiApple,
          link: "https://support.apple.com/kb/sp770?locale=en_US",
        },
        {
          name: "Redmi Note 10",
          description: "REDMI Note 10 (Shadow Black, 128 GB)  (6 GB RAM)",
          Icon: SiXiaomi,
          link: "https://www.mi.com/in/redmi-note-10/",
        },
        {
          name: "Redmi K20 Pro",
          description: "Redmi K20 Pro (Carbon Black, 128 GB)  (6 GB RAM)",
          Icon: SiXiaomi,
          link: "https://www.mi.com/in/redmi-k20-pro/",
        },
        {
          name: "Vivo V17",
          description: "Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage)",
          Icon: SiVivaldi,
          link: "https://www.vivo.com/in/products/param/v17",
        },
        {
          name: "iPhone 7",
          description: "iPhone 6s Jet Black1 - 128GB",
          Icon: SiApple,
          link: "https://support.apple.com/kb/SP743?locale=en_US",
        },
        {
          name: "iPhone 6S",
          description: "iPhone 6s Rose Gold - 64GB",
          Icon: SiApple,
          link: "https://support.apple.com/kb/sp726?locale=en_US",
        },
        {
          name: "iPhone 5S",
          description: "iPhone 5S - 32GB",
          Icon: SiApple,
          link: "https://support.apple.com/kb/sp685?locale=en_US",
        },
        {
          name: "iPhone 4S",
          description: "iPhone 4S - 16GB",
          Icon: SiApple,
          link: "https://support.apple.com/kb/sp643?locale=en_US",
        },
        {
          name: "Vivo V7",
          description: "Vivo V7 (Matte Black, 32GB, 4GB RAM)",
          Icon: SiVivaldi,
          link: "https://www.vivo.com/in/products/param/v7",
        },
        {
          name: "Nokia 5800",
          description: "Nokia 5800 XpressMusic",
          Icon: SiNokia,
          link: "http://www.blogcdn.com/www.engadget.com/media/2008/10/nokia-5800-ofc-07-sm.jpg",
        },
      ],
    },

    {
      title: "Software & Applications",
      data: [
        {
          name: "Vercel",
          description: "Hosting for Projects",
          Icon: SiVercel,
          link: "http://vercel.com/",
        },
        {
          name: "Prettier",
          description: "For Code formatting",
          Icon: SiPrettier,
          link: "https://prettier.io/",
        },
        {
          name: "Git",
          description: "Version Control",
          Icon: FaGitAlt,
          link: "https://git-scm.com/downloads",
        },
        {
          name: "Github Desktop",
          description: "To Manage the Github Project and Changes",
          Icon: BsGithub,
          link: "https://desktop.github.com/",
        },
        {
          name: "pnpm",
          description: "Primary Package Manager",
          Icon: SiPnpm,
          link: "https://pnpm.io/installation",
        },
        {
          name: "yarn",
          description: "Alternative Package Manager",
          Icon: SiYarn,
          link: "https://classic.yarnpkg.com/lang/en/docs/install/",
        },
        {
          name: "Spotify",
          description: "To Listen Music",
          Icon: SiSpotify,
          link: "https://www.spotify.com/us/download/windows/",
        },
        {
          name: "Everything Search",
          description: "For Quick searching in Windows",
          Icon: FaSearch,
          link: "https://www.voidtools.com/downloads/",
        },
        {
          name: "Microsoft Todo",
          description: "To manage all my todos",
          Icon: SVG.MicrosoftToDo,
          link: "https://todo.microsoft.com/tasks/",
        },
        {
          name: "Notepad++",
          description: "Quick Code Editing",
          Icon: SiNotepadplusplus,
          link: "https://keep.google.com/",
        },
        {
          name: "7-Zip",
          description: "File Archiver",
          Icon: SVG.Zip7,
          link: "https://www.7-zip.org/download.html",
        },
      ],
    },
  ],
};

export default utilities;
