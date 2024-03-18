/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["files.edgestore.dev", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
