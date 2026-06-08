"use client";

import { useStacks } from "@/hooks/useStacks";
import { shortenAddress } from "@/lib/stacks";

export default function ConnectWallet() {
  const { address, connected, connect, disconnect } = useStacks();

  if (connected && address) {
    return (
      <button
        onClick={disconnect}
        className="px-4 py-2 rounded-lg bg-dark-card border border-dark-border text-sm hover:border-primary transition-colors"
        title="Click to disconnect"
      >
        <span className="text-secondary">{shortenAddress(address)}</span>
      </button>
    );
  }

  return (
    <button
      onClick={connect}
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:shadow-glow-sm transition-shadow"
    >
      Connect Wallet
    </button>
  );
}
