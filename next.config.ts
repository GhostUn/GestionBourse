/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
    ],
  },
    typescript: {
    ignoreBuildErrors: true, // ⛔️ Ignore les erreurs TS au build (dangereux en prod)
  },
  eslint: {
    ignoreDuringBuilds: true, // ⛔️ Ignore les erreurs ESLint au build
  },
};

module.exports = nextConfig;
