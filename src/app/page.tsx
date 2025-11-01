import Lightning from "@/components/Lightning"
import { Button } from "@/components/ui/button"
import { Github, Zap, Gamepad2, Code2, Smartphone, Cpu } from "lucide-react"
import Header from "@/components/Header"
import Link from "next/link"
import Loop from "@/components/LoopLogo"
import Speed from "@/components/Hyperspeed"
import { TerminalDemo } from "@/components/Codeblock"
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import Image from "next/image"
import { CardStackDemo } from "@/components/terminal-stack"
export default function Home() {
  const platforms = [
    { name: "Unity",  icon: "/marquee/unity.svg", description: "Full-featured game engine integration" },
    { name: "Unreal Engine", icon: "/marquee/unreal4.svg", description: "Enterprise-grade game development" },
    { name: "Telegram", icon: "/marquee/telegram.svg", description: "Instant game deployment" },
    { name: "WebGL", icon: "/marquee/webgl.svg", description: "Browser-based gaming" },
    { name: "Farcaster", icon: "/marquee/farcaster.svg", description: "Decentralized gaming" },
    { name: "Mobile", icon: "/marquee/mobile.svg", description: "iOS & Android support" },
  ]

  return (
    <div className="h-full w-full overflow-hidden bg-black">
      {/* Lightning Background */}
      <Lightning hue={220} xOffset={-1.2} speed={0.4} intensity={0.8} size={1} />

      {/* Content Overlay */}
      <div className="relative z-10 h-screen w-full flex flex-col">
       <Header/>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-medium">Open Source Game SDK</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white text-balance">
              x402,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                For Games
              </span>
            </h1>

            <p className="text-2xl md:text-2xl text-gray-300 text-balance max-w-2xl mx-auto">
              X402 made for Game Engines
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold" asChild>
                <a href="https://github.com/0xdeepanshu/docs/tree/main" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                asChild
              >
                <a href="https://rapturelabs.mintlify.app/">View Documentation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms Section */}
   
        <div
        id="platforms"
        className="relative z-10 min-h-screen bg-transparent bg-black"
      >
        
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Deploy Everywhere</h2>
            <p className="text-gray-400 text-lg">Support for all major gaming platforms and frameworks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Image
            src={platform.icon}
            alt={platform.name}
            width={32}
            height={32}
            className="rounded-md"
          />
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      
      <Loop/>
      {/* Features Section */}
     <div
  id="features"
  className="relative z-10 min-h-screen bg-[#000304] border-t border-cyan-500/20 overflow-hidden"
>
  <div > 
  <Speed /> {/* keep your animated background */}
  </div>
  <div className="max-w-6xl mx-auto px-4 py-24 relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        Power. Precision. Speed.
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        GX402 brings instant Solana-based payments and ultra-fast verification to your apps — with one unified API.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <div className="flex gap-4">
          <Zap className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Lightning Transactions</h3>
            <p className="text-gray-400">
              Payments verified in milliseconds on Solana & EVM's — no waiting, no delays.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Cpu className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Optimized for Performance</h3>
            <p className="text-gray-400">
              Built with zero-latency architecture to handle high transaction throughput effortlessly.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Code2 className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Unified API</h3>
            <p className="text-gray-400">
              One SDK for every platform — web, Unity, Unreal, and mobile.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <Gamepad2 className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Game-Ready Integration</h3>
            <p className="text-gray-400">
              Plug GX402 directly into your games for seamless on-chain in-app purchases.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Smartphone className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Mobile-First Design</h3>
            <p className="text-gray-400">
              Smooth payment flows for both iOS and Android users — optimized for speed and UX.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Github className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Open Source & Transparent</h3>
            <p className="text-gray-400">
              Fully open implementation — inspect, modify, and integrate freely.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Subtle gradient overlay for glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6A3CFF]/10 to-[#000304] pointer-events-none" />
</div>

<div className="min-h-screen bg-black flex items-center">
      {/* Left Content Section */}
      <div className="flex-1 px-12 py-6 flex flex-col justify-center">
        <h1 className="text-6xl font-bold leading-tight mb-8 text-white max-w-2xl">
          
          <span className="block text-white mt-2">Meets Developer Experience</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-md leading-relaxed">
          GX402 is more than a system — it’s your execution layer for speed, scalability, and control. Every line optimized. Every process accelerated.
        </p>

        <div className="flex gap-4 items-center">
          <Button size="lg" className="px-8 py-6 text-black">
            Start Building
          </Button>
         <Link href='https://rapturelabs.mintlify.app/'> <Button variant="outline" size="lg" className="px-8 py-6 text-white bg-transparent">
            View Docs
          </Button></Link>
        </div>

        {/* Feature Pills */}
      <div className="mt-16 flex flex-wrap gap-3">
  
  <div className="flex justify-center items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
    <Image
            src='/marquee/unreal4.svg'
            alt=''
            width={20}
            height={20}
            className="rounded-md"
          />
     Unity & Unreal AAA Engine
  </div>
  <div className=" flex justify-center items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
    <Image
            src='/marquee/farcaster.svg'
            alt=''
            width={20}
            height={20}
            className="rounded-md"
          />
     Farcaster App Connect
  </div>
  <div className="flex justify-center items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
    <Image
            src='/marquee/blockchain.svg'
            alt=''
            width={20}
            height={20}
            className="rounded-md"
          />
     Web3 Wallet Integration
  </div>
  <div className="flex justify-center items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
    <Image
            src='/marquee/thirdweb.svg'
            alt=''
            width={20}
            height={20}
            className="rounded-md"
          />
     OpenAPI & Thirdweb Nexus
  </div>
  <div className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
    👥 Live Multiplayer Support
  </div>
  <div className="flex justify-center items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
    <Image
            src='/marquee/developer.svg'
            alt=''
            width={20}
            height={20}
            className="rounded-md"
          />
     Developer-Friendly SDK
  </div>
</div>

      </div>

      {/* Right Code Editor Section */}
      <div className="flex-1 pr-12 py-20 flex items-center justify-center">
      <TerminalDemo/>
      </div>
    </div>
      {/* CTA Section */}
      
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-black/80 to-black backdrop-blur-sm border-t border-cyan-500/20 flex items-center justify-center">
  <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
    <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Build?</h2>
    <p className="text-xl text-gray-400">
      Join the community and start building games with gx402 today
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold gap-2"
        asChild
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5" />
          View on GitHub
        </a>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
        asChild
      >
        <a href="https://rapturelabs.mintlify.app/">Read Docs</a>
      </Button>
      {/* Twitter/X Button */}
      <Button
        size="lg"
        variant="outline"
        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
        asChild
      >
        <a href="https://twitter.com/yourHandle" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-5 h-5" /> {/* Use X icon if you prefer */}
          Follow on X
        </a>
      </Button>
      {/* Discord Button */}
      <Button
        size="lg"
        variant="outline"
        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
        asChild
      >
        <a href="https://discord.gg/RSzdmPWQ" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="w-5 h-5" />
          Join Discord
        </a>
      </Button>
    </div>
<div className="text-gray-400 text-3xl ">Building More Soon...</div>
  </div>
</div>
    </div>
  )
}
