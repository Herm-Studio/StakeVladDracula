/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/v1/(.*)",
        destination: "/api/proxy",
      },
      {
        source: "/v1beta/(.*)",
        destination: "/api/proxy",
      },
      {
        source: "/headers",
        destination: "/api/proxy",
      },
      {
        source: "/",
        destination: "/api/proxy"
      }
    ];
  },
};

module.exports = nextConfig;
