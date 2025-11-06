"use client"

import React, { useEffect, useRef, useState } from "react";

type Props = {
  facilitatorUrl?: string;
  containerRef?: React.Ref<HTMLDivElement>;
};

// FacilitatorSection
// - Full-screen (h-screen w-full)
// - Big title + subtitle
// - Copy-to-clipboard button with feedback
// - Open in new tab link
// - Accepts an optional external ref (containerRef) so you can reuse your existing ctnDom

export default function FacilitatorSection({
  facilitatorUrl = "https://api.gx402.org",
  containerRef,
}: Props) {
  const localRef = useRef<HTMLDivElement | null>(null);
  const ctnRef = (containerRef as React.RefObject<HTMLDivElement>) ?? localRef;

  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(facilitatorUrl);
      setCopied(true);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("copy failed", err);
    }
  }

  return (
    <div
      ref={ctnRef as any}
      className="h-screen absolute w-full  bg-transparent text-white overflow-hidden"
    >
      {/* subtle decorative SVG blobs */}
     

      <div className="absolute inset-0 grid place-items-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight drop-shadow-md">Facilitator</h1>

          <p className="mt-4 text-lg sm:text-xl text-slate-300">We provide our own facilitator</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopy}
              aria-label="Copy facilitator URL"
              className="inline-flex items-center gap-3 bg-white/8 hover:bg-white/12 transition px-5 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

              <span className="font-medium">Copy facilitator URL</span>
            </button>

            <a
              href={facilitatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
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
              Open
            </a>
          </div>

          <div className="mt-4 h-6">
            {copied ? (
              <div className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-1 bg-green-600/20 text-green-300 text-sm">Copied to clipboard</div>
            ) : (
              <div className="text-sm text-slate-400">{facilitatorUrl}</div>
            )}
          </div>
        </div>
      </div>

      {/* small footer label */}
      <div className="absolute bottom-6 right-6 text-xs text-slate-400">{new URL(facilitatorUrl).host}</div>
    </div>
  );
}
