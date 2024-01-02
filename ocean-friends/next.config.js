/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.js", "page.tsx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
