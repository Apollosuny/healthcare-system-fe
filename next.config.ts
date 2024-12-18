import type { NextConfig } from 'next';

const domains = ['localhost'];

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: domains,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
    minimumCacheTTL: 1 * 60 * 10, // 10 mins
  },
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/dashboard',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
