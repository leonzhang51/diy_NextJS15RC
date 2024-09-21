/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    after: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**tailwindui.com",
        port: "",
        pathname: "Image/logos/**",
      },
    ],
  },
};

export default nextConfig;
