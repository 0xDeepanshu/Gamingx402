import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; gx402 --init engine</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Booting GX402 core modules...
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Validating runtime environment.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Network link established with Solana devnet.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Payment facilitator verified.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Loading hyperspeed renderer.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Syncing AI control systems.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Deploying real-time telemetry protocols.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ System integrity: 100%.
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Configuration updated:</span>
        <span className="pl-2">- x402/core/engine.ts</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        GX402 ready. Awaiting mission parameters.
      </TypingAnimation>
      <TypingAnimation className="text-muted-foreground">
        Launch sequence standing by...
      </TypingAnimation>
    </Terminal>
  )
}
