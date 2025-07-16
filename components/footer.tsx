import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-red-900/10 bg-black py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="https://github.com/Herm-Studio/StakeVladDracula/raw/main/assets/logo.png"
              alt="Stake Vlad Dracula Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-lg font-bold text-red-600">Stake Vlad Dracula</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            <Link href="#features" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
              Features
            </Link>
            <Link href="#deployment" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
              Deployment
            </Link>
            <Link
              href="https://github.com/Herm-Studio/StakeVladDracula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-red-900/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} Stake Vlad Dracula. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Herm-Studio/StakeVladDracula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>by Herm Studio</span>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>If you found this implementation helpful, please give it a star on GitHub!</p>
        </div>
      </div>
    </footer>
  )
} 