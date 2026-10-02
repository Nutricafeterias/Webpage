import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/propuestas/tec-santa-fe', destination: '/propuestas/tec-santa-fe/index.html' },
      { source: '/propuestas/itj-santa-monica', destination: '/propuestas/itj-santa-monica/index.html' },
      { source: '/propuestas/uvaq-halcones', destination: '/propuestas/uvaq-halcones/index.html' },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
