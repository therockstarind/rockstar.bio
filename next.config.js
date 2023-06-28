/**
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  publicExcludes: ["!resume.pdf"],
});

module.exports = withPWA({
  publicRuntimeConfig: {
    ONEDRIVE_GALLERY: process.env.ONEDRIVE_GALLERY,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_ACCOUNT_ID: process.env.TMDB_ACCOUNT_ID,
    TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
    TITLE: process.env.TITLE,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "imgur.com",
      "i.imgur.com",
      "1drv.ms",
      'thvqkg.bn.files.1drv.com',
      "i.scdn.co",
      "github.com",
      "ubuupg.bn.files.1drv.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});
