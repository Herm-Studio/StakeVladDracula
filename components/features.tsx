import { Shield, Zap, Server, Globe } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="bg-black py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Piercing <span className="text-red-600">Capabilities</span>
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl">
            Like Vlad the Impaler, our service cuts through complexity with precision and power.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-900/20 border border-red-800/50">
              <Zap className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Lightning Fast</h3>
            <p className="mt-2 text-gray-400">
              Experience blazing-fast response times that cut through network latency like a blade through darkness.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-900/20 border border-red-800/50">
              <Shield className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Secure Routing</h3>
            <p className="mt-2 text-gray-400">
              Safely route your API requests through our gateway with proper header handling.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-900/20 border border-red-800/50">
              <Server className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Multi-Provider</h3>
            <p className="mt-2 text-gray-400">
              Support for OpenAI, Claude, Gemini, and Groq all through a single gateway.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-900/20 border border-red-800/50">
              <Globe className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Global Deployment</h3>
            <p className="mt-2 text-gray-400">
              Deploy anywhere with Docker, Vercel, Zeabur, or Netlify for global edge performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 