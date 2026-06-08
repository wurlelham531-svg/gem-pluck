import { StacksMainnet } from "@stacks/network";

export const NETWORK = new StacksMainnet();

export const CONTRACT_ADDRESS = "SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C";
export const CONTRACT_NAME    = "gem-pluck";

export const HIRO_API_BASE = "https://api.mainnet.hiro.so";

export function shortenAddress(addr: string, head = 6, tail = 4): string {
  if (!addr || addr.length < head + tail + 3) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + "K";
  return n.toLocaleString();
}
