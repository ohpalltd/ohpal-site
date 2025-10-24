/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/signup',
        destination: '/sapphiracare/signup',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
