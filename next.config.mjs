/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: '*',
        destination: process.env.NEXT_PUBLIC_BASE_URL, // 백엔드 URL로 프록시
      },
    ];
  },
};

export default nextConfig;
