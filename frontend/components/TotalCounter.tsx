"use client";

import { useEffect, useState } from "react";
import { getTotalPlucks } from "@/lib/contracts";
import { formatNumber } from "@/lib/stacks";

export default function TotalCounter() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const t = await getTotalPlucks();
      if (!cancelled) setTotal(t);
    }
    load();
    const id = setInterval(load, 30_000);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border text-sm">
      <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
      <span className="text-gray-400">Total plucks:</span>
      <span className="font-mono text-secondary">
        {total === null ? "…" : formatNumber(total)}
      </span>
    </div>
  );
}
