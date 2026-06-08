"use client";

import { useState } from "react";
import { useStacks } from "@/hooks/useStacks";
import { pluck } from "@/lib/contracts";

interface Props {
  gemId: number;
  color: string;
}

export default function PluckButton({ gemId, color }: Props) {
  const { connected, connect } = useStacks();
  const [submitting, setSubmitting] = useState(false);

  const onClick = async () => {
    if (!connected) {
      connect();
      return;
    }
    try {
      setSubmitting(true);
      await pluck(gemId);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={submitting}
      className="pluck-btn w-full mt-4 py-2.5 rounded-lg text-white font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed transition-shadow hover:shadow-glow-sm"
      style={{
        background: `linear-gradient(135deg, ${color}, rgba(160, 32, 224, 0.95))`,
      }}
    >
      {submitting ? "Submitting…" : connected ? "Pluck" : "Connect to Pluck"}
    </button>
  );
}
