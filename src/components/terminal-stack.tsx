"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { TerminalDemo, TerminalDemoUnity} from "./Codeblock";

export function CardStackDemo() {
  return (
    <div className="h-full flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "GX402",
    designation: "Zero-Latency Engine",
    content: <TerminalDemo />,
  },
  {
    id: 1,
    name: "GX402",
    designation: "Performance Module",
    content: <TerminalDemoUnity />,
  },
  {
    id: 2,
    name: "GX402",
    designation: "Runtime Layer",
    content: <TerminalDemo />,
  },
];