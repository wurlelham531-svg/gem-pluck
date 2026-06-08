"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { showConnect } from "@stacks/connect";

interface StacksContextType {
  address: string | null;
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
}

const StacksContext = createContext<StacksContextType>({
  address: null,
  connected: false,
  connect: () => {},
  disconnect: () => {},
});

export function StacksProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);

  const connect = useCallback(() => {
    showConnect({
      appDetails: {
        name: "Gem Pluck",
        icon: "/icon.png",
      },
      onFinish: (payload) => {
        const userData = payload.userSession.loadUserData();
        const addr =
          userData.profile?.stxAddress?.mainnet || userData.identityAddress;
        setAddress(addr);
      },
      onCancel: () => {
        console.log("Connection cancelled");
      },
    });
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
  }, []);

  return (
    <StacksContext.Provider
      value={{ address, connected: !!address, connect, disconnect }}
    >
      {children}
    </StacksContext.Provider>
  );
}

export function useStacks() {
  return useContext(StacksContext);
}
