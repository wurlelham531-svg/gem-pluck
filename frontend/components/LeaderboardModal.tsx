"use client";

import { useEffect, useState } from "react";
import { getLeaderboard } from "@/lib/contracts";
import { GEMS } from "@/lib/gems";
import { formatNumber } from "@/lib/stacks";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LeaderboardModal({ open, onClose }: Props) {
  const [rows, setRows] = useState<{ gemId: number; count: number; name: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    getLeaderboard()
      .then((data) => { if (!cancelled) setRows(data); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-dark-card border border-dark-border shadow-card p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Gem Leaderboard</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : (
          <ul className="space-y-2">
            {rows.map((r, i) => {
              const gem = GEMS.find((g) => g.id === r.gemId);
              return (
                <li
                  key={r.gemId}
                  className="lb-row flex items-center justify-between px-4 py-3 rounded-lg border border-dark-border"
                  style={{ borderColor: gem?.color + "44" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-5 text-right">
                      {i + 1}.
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: gem?.color }}
                    />
                    <span className="font-medium">{r.name}</span>
                  </div>
                  <span className="font-mono text-secondary">
                    {formatNumber(r.count)}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
