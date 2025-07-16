import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Github } from "lucide-react"
import { DeploymentOptions } from "@/components/deployment-options"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export const metadata = {
  metadataBase: "https://stakevladdracula.vercel.app",
  title: "Stake Vlad Dracula | Pure AI API Proxy Service",
  description: "StakeVladDracula pierces all! A high-performance API gateway service for AI providers like OpenAI, Claude, Gemini, and Groq.",
  keywords: "API gateway, API proxy, OpenAI proxy, Claude proxy, Gemini proxy, Groq proxy, AI API",
  openGraph: {
    title: "Stake Vlad Dracula | Pure AI API Proxy Service",
    description: "StakeVladDracula pierces all! A high-performance API gateway service for AI providers.",
    images: [{ url: "/og-image.png" }],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-red-900/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://github.com/Herm-Studio/StakeVladDracula/raw/main/assets/logo.png"
              alt="Stake Vlad Dracula Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-red-600">Stake Vlad Dracula</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Features
            </Link>
            <Link href="#deployment" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Deployment
            </Link>
            {/* <Link href="/api" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              API Info
            </Link> */}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/Herm-Studio/StakeVladDracula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-red-800 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-900/20 transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-black py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://repository-images.githubusercontent.com/763552311/e8577328-32e3-4e72-b81e-a9d2670c9d1c"
              alt="Gothic Background"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          <div className="container relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-red-900/20 px-3 py-1 text-sm text-red-500 border border-red-800/50">
                  Router v2.0 Released
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  <span className="block">Stake Vlad Dracula</span>
                  <span className="block text-red-600">Pierces All!</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A pure AI API proxy service with no UI, just raw, ferocious performance. Route your AI provider requests through our gateway and unleash the piercing power of Dracula. Our gateway cloaks your IP, effortlessly bypassing geographic restrictions and shrugging off blocks, ensuring your access to AI providers remains unyielding and unstoppable.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link
                    href="https://github.com/Herm-Studio/StakeVladDracula"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-red-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-red-800 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-900/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-4 border-red-900/50 bg-black/50 shadow-2xl lg:ml-auto">
                <Image
                  src="https://github.com/Herm-Studio/StakeVladDracula/raw/main/assets/logo.png"
                  alt="Stake Vlad Dracula"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        <Features />

        <section id="deployment" className="bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Deploy <span className="text-red-600">Anywhere</span>
              </h2>
              <p className="mt-4 text-gray-300 md:text-xl">
                Stake your claim with one-click deployments to your preferred platform.
              </p>
            </div>
            <DeploymentOptions />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 