/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'modules'],
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
};

module.exports = nextConfig;
