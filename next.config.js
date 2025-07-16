/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/headers",
        destination: "/api/headers",
      },
      {
        source: "/v1/messages/:path*",
        destination: "/api/v1/messages/:path*",
      },
      {
        source: "/v1/complete/:path*", 
        destination: "/api/v1/complete/:path*",
      },
      {
        source: "/v1beta/:path*",
        destination: "/api/v1beta/:path*",
      },
      {
        source: "/openai/v1/:path*",
        destination: "/api/openai/v1/:path*",
      },
      {
        source: "/v1/:path*",
        destination: "/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
