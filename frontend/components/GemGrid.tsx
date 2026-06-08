"use client";

import { useEffect, useState } from "react";
import { GEMS } from "@/lib/gems";
import { getAllGemCounts } from "@/lib/contracts";
import GemCard from "./GemCard";

export default function GemGrid() {
  const [counts, setCounts] = useState<number[]>(Array(6).fill(0));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await getAllGemCounts();
        if (cancelled) return;
        const arr = Array(6).fill(0);
        data.forEach((c) => { arr[c.gemId - 1] = c.count; });
        setCounts(arr);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    const t = setInterval(load, 30_000);
    return () => { cancelled = true; clearInterval(t); };
  }, []);

  const total = counts.reduce((a, b) => a + b, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {GEMS.map((gem) => {
        const count = counts[gem.id - 1] ?? 0;
        const pct   = total > 0 ? (count / total) * 100 : 0;
        return (
          <GemCard
            key={gem.id}
            gem={gem}
            count={loading ? 0 : count}
            pctOfTotal={pct}
          />
        );
      })}
    </div>
  );
}
