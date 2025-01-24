import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login', // Map '/login' to '/auth/login'
      },
      {
        source: '/sign-up',
        destination: '/auth/sign-up', // Map '/sign-up' to '/auth/sign-up'
      },
      {
        source: '/forgot-password',
        destination: '/auth/forgot-password', // Map '/forgot-password' to '/auth/forgot-password'
      },
    ];
  },
};

export default nextConfig;
