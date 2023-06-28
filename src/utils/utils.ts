import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const UserName: string = publicRuntimeConfig.TITLE;
export const ProfileImage: string = "https://github.com/therockstarind.png";

export const snippetsImages: { [key: string]: string } = {
  css: "https://imgur.com/ArD8JIg.png",
  js: "https://imgur.com/lFKi8mB.png",
  react: "https://imgur.com/m2jv6MK.png",
  ts: "https://imgur.com/Ux6L5Uh.png",
  supabase: "https://imgur.com/xgNKVQa.png",
};
