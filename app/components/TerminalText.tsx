"use client";

import { useEffect, useState } from "react";

export default function TerminalText({
  lines,
  speed = 18,
  className = "",
}: {
  lines: string[];
  speed?: number;
  className?: string;
}) {
  const full = lines.join("\n");
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setOut(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [full, speed]);

  return (
    <pre className={`whitespace-pre-wrap leading-relaxed ${className}`}>
      {out}
      <span className="inline-block w-[10px] animate-pulse">▌</span>
    </pre>
  );
}
