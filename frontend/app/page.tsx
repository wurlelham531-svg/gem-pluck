"use client";

import { useState } from "react";
import Header from "@/components/Header";
import GemGrid from "@/components/GemGrid";
import TotalCounter from "@/components/TotalCounter";
import LeaderboardModal from "@/components/LeaderboardModal";

export default function Home() {
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  return (
    <div className="min-h-screen relative z-10">
      <Header onOpenLeaderboard={() => setLeaderboardOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-glow">
            Pluck a{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Gem
            </span>
          </h2>
          <p className="text-lg text-gray-400 drop-shadow-lg mb-5">
            Six gems. One pluck at a time. Counts live on-chain.
          </p>
          <TotalCounter />
        </div>
        <GemGrid />
      </main>
      <LeaderboardModal
        open={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
      />
    </div>
  );
}
