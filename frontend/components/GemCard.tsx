"use client";

import { Gem } from "@/lib/gems";
import { formatNumber } from "@/lib/stacks";
import PluckButton from "./PluckButton";

interface Props {
  gem: Gem;
  count: number;
  pctOfTotal: number;
}

export default function GemCard({ gem, count, pctOfTotal }: Props) {
  return (
    <div
      className="gem-card relative rounded-2xl p-5 bg-dark-card border border-dark-border shadow-card overflow-hidden"
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 0 30px ${gem.glow}`,
      }}
    >
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-50 blur-2xl"
        style={{ background: gem.color }}
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">{gem.name}</h3>
          <span
            className="text-xs px-2 py-0.5 rounded-full bg-dark/60 border border-dark-border"
            style={{ color: gem.color }}
          >
            #{gem.id}
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-4">{gem.tagline}</p>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-glow">
            {formatNumber(count)}
          </span>
          <span className="text-xs text-gray-400">
            {pctOfTotal > 0 ? `${pctOfTotal.toFixed(0)}% of total` : "no plucks yet"}
          </span>
        </div>

        <div className="mt-2 h-1.5 w-full rounded-full bg-dark/60 overflow-hidden">
          <div
            className="h-full progress-shimmer"
            style={{
              width: `${Math.min(100, pctOfTotal)}%`,
              background: `linear-gradient(90deg, ${gem.color}, rgba(255,78,197,0.7))`,
            }}
          />
        </div>

        <PluckButton gemId={gem.id} color={gem.color} />
      </div>
    </div>
  );
}
