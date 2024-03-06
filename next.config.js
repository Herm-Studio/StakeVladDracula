/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // OpenAI Api path
      {
        source: "/v1/(.*)",
        destination: "/api/proxy",
      },
      // Gemini Api path
      {
        source: "/v1beta/(.*)",
        destination: "/api/proxy",
      },
      // Groq Api path
      {
        source: "/openai/v1/(.*)",
        destination: "/api/proxy",
      },
      // Claude Api path
      {
        source: "/v1/messages",
        destination: "/api/proxy",
      },
      {
        source: "/v1/complete",
        destination: "/api/proxy",
      },
      // Claude Api path
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
