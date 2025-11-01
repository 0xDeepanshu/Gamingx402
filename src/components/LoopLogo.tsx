"use client"
import LogoLoop from './ui/LogoLoop';

// Alternative with image sources
const imageLogos = [
  { src: "/marquee/thirdweb.svg", alt: "Company 1",  },
  { src: "/marquee/Base_lockup_white.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/marquee/unreal4.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/marquee/unity.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/marquee/solana.svg", alt: "Company 2", href: "https://company2.com" },
  { src: "/marquee/farcaster.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/marquee/ethereum-eth-logo.svg", alt: "Company 3", href: "https://company3.com" },
   { src: "/marquee/arbitrum.svg", alt: "Company 3", href: "https://company3.com" },
];

export default function Loop() {
  return (
    <div className='bg-black flex items-center justify-center' style={{ height: '400px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={68}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#0a0a0a"
        ariaLabel="Technology partners"
      />
    </div>
  );
}