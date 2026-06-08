import { openContractCall } from "@stacks/connect";
import { GemPluckClient } from "gem-pluck-sdk";
import { CONTRACT_ADDRESS, CONTRACT_NAME, NETWORK } from "./stacks";

export type { GemCount, UserStats } from "gem-pluck-sdk";

const client = new GemPluckClient({
  contractAddress: CONTRACT_ADDRESS,
  contractName:    CONTRACT_NAME,
});

export async function pluck(gemId: number): Promise<void> {
  const args = client.getPluckArgs(gemId);
  await openContractCall({
    network: NETWORK,
    ...args,
    onFinish: (data) => {
      console.log("Pluck tx:", data.txId);
    },
    onCancel: () => {
      console.log("Pluck cancelled");
    },
  });
}

export const getGemCount     = (gemId: number)      => client.getGemCount(gemId);
export const getAllGemCounts = ()                   => client.getAllGemCounts();
export const getTotalPlucks  = ()                   => client.getTotalPlucks();
export const getUserStats    = (address: string)    => client.getUserStats(address);
export const getLeaderboard  = ()                   => client.getLeaderboard();

export async function getTopPluckers(): Promise<
  { address: string; plucks: number }[]
> {
  try {
    const url = `https://api.mainnet.hiro.so/extended/v1/address/${CONTRACT_ADDRESS}.${CONTRACT_NAME}/transactions?limit=50`;
    const res = await fetch(url);
    const data = await res.json();

    const pluckerMap = new Map<string, number>();
    for (const tx of data.results || []) {
      if (tx.tx_type === "contract_call" && tx.tx_status === "success") {
        const sender = tx.sender_address;
        pluckerMap.set(sender, (pluckerMap.get(sender) || 0) + 1);
      }
    }

    return Array.from(pluckerMap.entries())
      .map(([address, plucks]) => ({ address, plucks }))
      .sort((a, b) => b.plucks - a.plucks)
      .slice(0, 10);
  } catch {
    return [];
  }
}
