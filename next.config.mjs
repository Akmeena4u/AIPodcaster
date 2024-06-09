/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: "export",
  typescript: {
    ignoreBuildErrors: true
  },
// basePath: '/https://github.com/Akmeena4u/AIPodcaster.git',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovely-flamingo-139.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'spotted-firefly-660.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
    ]
  }
};

export default nextConfig;
