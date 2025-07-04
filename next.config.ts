import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ifzagjrxuyxvjccbwsfu.supabase.co", // your Supabase project domain
        pathname: "/storage/v1/object/public/**",     // allow all images in public storage
      },
    ],
  },
};

export default nextConfig;
