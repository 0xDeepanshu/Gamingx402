import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Github,Zap } from 'lucide-react'
function Header() {
  return (
    
        <header className="flex items-center justify-between px-8 py-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <Image
             src='/logo/LOGO_T11.png'
             alt=''
             width={30}
             height={30}
             className='w-[40px]'
            />
            <span className="text-xl font-bold text-white">402</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#platforms" className="text-gray-300 hover:text-cyan-400 transition">
              Platforms
            </a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition">
              Features
            </a>
            <a href="https://rapturelabs.mintlify.app/" className="text-gray-300 hover:text-cyan-400 transition">
              Docs
            </a>
          </nav>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold gap-2" asChild>
            <a href="https://github.com/0xdeepanshu/docs/tree/main" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </header>
  )
}

export default Header