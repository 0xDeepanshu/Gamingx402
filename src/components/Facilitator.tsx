"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
type Props = {
  facilitatorUrl?: string
  containerRef?: React.Ref<HTMLDivElement>
}

export default function FacilitatorSection({ facilitatorUrl = "https://api.gx402.org", containerRef }: Props) {
  const localRef = useRef<HTMLDivElement | null>(null)
  const ctnRef = (containerRef as React.RefObject<HTMLDivElement>) ?? localRef

  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(facilitatorUrl)
      setCopied(true)
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200)
    } catch (err) {
      console.error("copy failed", err)
    }
  }

  return (
    <div ref={ctnRef as any} className="relative w-full py-10 px-6 bg-transparent text-white overflow-hidden backdrop-blur-lg">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-md text-center">
            Gx402 Facilitator
          </h1>
          <p className="mt-4 text-lg text-slate-300 text-center">
            A trusted backend service that verifies and settles Gx402 payment flows across supported networks (EVM /
            SVM)
          </p>
        </div>

        <div className="relative mb-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-8 shadow-2xl">
          {/* Glassy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">Instance URL</h2>
                <p className="text-slate-300 mb-4">
                  The primary facilitator endpoint for payment verification and settlement
                </p>
              </div>
              <Button size="lg"
                onClick={handleCopy}
                aria-label="Copy facilitator URL"
                className="inline-flex items-center gap-3 text-white border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent transition px-5 py-3 rounded-lg border  whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="9" y="9" width="10" height="10" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span className="font-medium">Copy</span>
              </Button>
            </div>

            {/* URL Display */}
            <div className="mb-6 rounded-lg bg-black/20 p-4 font-mono text-sm border border-white/10">
              <code className="text-cyan-300">{facilitatorUrl}</code>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">Stack</h3>
                <p className="text-xs text-slate-400">Node.js, Express, TypeScript</p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">Purpose</h3>
                <p className="text-xs text-slate-400">Verify & settle payment flows</p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">Networks</h3>
                <p className="text-xs text-slate-400">EVM & SVM </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Core Responsibilities</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-300">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Verify</p>
                    <p className="text-xs text-slate-400">
                      Validate payment payloads against requirements to prevent invalid transactions
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-300">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Settle</p>
                    <p className="text-xs text-slate-400">
                      Sign and submit transactions using configured signers (EVM or SVM)
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-pink-300">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Report Supported</p>
                    <p className="text-xs text-slate-400">
                      Provide information on available payment kinds, networks, and fee payers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
              <Button
                size="lg"
                className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-500 hover:bg-cyan-600 text-black rounded-lg border border-white/20  transition"
                asChild
              >
                <a
                  href="https://docs.gx402.org/facilitator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {/* Inline SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 21H3V3" />
                  </svg>
                  Open Facilitator Docs
                </a>
              </Button>
              <span className="text-sm text-slate-400">
                {copied ? (
                  <span className="inline-flex items-center gap-2 rounded-md px-3 py-1 bg-green-600/20 text-green-300">
                    ✓ Copied
                  </span>
                ) : (
                  <span>{new URL(facilitatorUrl).host}</span>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h3 className="text-lg font-semibold mb-3">Client</h3>
            <p className="text-sm text-slate-400">
              Any application initiating a GX402 payment: web apps, mini-apps, mobile apps, or backend services.
              Generates payment payloads and requirements.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h3 className="text-lg font-semibold mb-3">Signer Layer</h3>
            <p className="text-sm text-slate-400">
              Handles blockchain signatures using EVM_PRIVATE_KEY (EVM) or SVM_PRIVATE_KEY (Solana) for transaction
              settlement.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h3 className="text-lg font-semibold mb-3">Verification</h3>
            <p className="text-sm text-slate-400">
              Validates that payment payloads satisfy requirements and rules before processing. Prevents invalid or
              poisoned transactions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h3 className="text-lg font-semibold mb-3">Blockchain RPC</h3>
            <p className="text-sm text-slate-400">
              Communicates directly with blockchain nodes to settle transactions on EVM and SVM networks.
            </p>
          </div>
        </div>

        {/* Footer Label */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Facilitator Instance: {new URL(facilitatorUrl).host}
        </div>
      </div>
    </div>
  )
}
