
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeaderVisibility = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down (and not at top)
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeaderVisibility);
      return () => window.removeEventListener('scroll', controlHeaderVisibility);
    }
  }, [lastScrollY]);

  return (
    <header
      className={`z-[100] fixed top-0 w-full backdrop-blur-lg flex items-center justify-between px-8 py-4 border-b border-cyan-500/20 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/logo/LOGO_T11.png"
          alt="402 Logo"
          width={40}
          height={40}
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
        <a
          href="https://docs.gx402.org"
          className="text-gray-300 hover:text-cyan-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
      </nav>

      <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold gap-2" asChild>
        <a
          href="https://github.com/0xdeepanshu/docs/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </Button>
    </header>
  );
}

export default Header;