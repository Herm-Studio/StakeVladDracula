import Image from "next/image"
import Link from "next/link"

export function DeploymentOptions() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      <div className="flex flex-col items-center rounded-lg border border-red-900/20 bg-black/50 p-6 text-center shadow-lg transition-transform hover:scale-105">
        <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/in/8329?s=30&u=cd19897a18dc3e7a2b0b8be2c6ce135b726c5772&v=4"
            alt="Vercel Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-white">Vercel</h3>
        <p className="mt-2 text-gray-400">Recommended deployment option with global edge network.</p>
        <Link
          href="https://vercel.com/new/clone?repository-url=https://github.com/Herm-Studio/StakeVladDracula"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
        >
          Deploy to Vercel
        </Link>
      </div>
      <div className="flex flex-col items-center rounded-lg border border-red-900/20 bg-black/50 p-6 text-center shadow-lg transition-transform hover:scale-105">
        <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/in/212230?s=30&u=8578864168ef077711a1832e0990eb063b631846&v=4"
            alt="Zeabur Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-white">Zeabur</h3>
        <p className="mt-2 text-gray-400">Alternative deployment with powerful infrastructure.</p>
        <Link
          href="https://zeabur.com/templates/3JCE7F?referralCode=WongLoki"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
        >
          Deploy to Zeabur
        </Link>
      </div>
      <div className="flex flex-col items-center rounded-lg border border-red-900/20 bg-black/50 p-6 text-center shadow-lg transition-transform hover:scale-105">
        <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/in/13473?s=30&u=a8c6e35a15f833f7487d4a6abdbab66ce52041b0&v=4"
            alt="Netlify Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-white">Netlify</h3>
        <p className="mt-2 text-gray-400">Simple deployment with continuous integration.</p>
        <Link
          href="https://app.netlify.com/start/deploy?repository=https://github.com/Herm-Studio/StakeVladDracula"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
        >
          Deploy to Netlify
        </Link>
      </div>
    </div>
  )
} 