"use client";

import ConnectWallet from "./ConnectWallet";

interface HeaderProps {
  onOpenLeaderboard: () => void;
}

export default function Header({ onOpenLeaderboard }: HeaderProps) {
  return (
    <header className="border-b border-dark-border backdrop-blur-sm bg-dark-card/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💎</span>
          <h1 className="text-xl font-bold tracking-tight">
            Gem <span className="text-secondary">Pluck</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenLeaderboard}
            className="px-4 py-2 rounded-lg bg-dark-card border border-dark-border text-sm hover:border-primary transition-colors"
          >
            Leaderboard
          </button>
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
