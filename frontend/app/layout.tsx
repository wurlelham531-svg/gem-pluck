import type { Metadata } from "next";
import "./globals.css";
import { StacksProvider } from "@/hooks/useStacks";

export const metadata: Metadata = {
  metadataBase: new URL("https://gem-pluck.vercel.app"),
  title: "Gem Pluck - Six Gems on Stacks",
  description: "Pluck one of six gems on Stacks (Clarity 4). Counts live on-chain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="talentapp:project_verification"
          content="REPLACE_WITH_TALENT_VERIFICATION_HASH"
        />
      </head>
      <body className="min-h-screen text-white antialiased relative">
        <StacksProvider>{children}</StacksProvider>
      </body>
    </html>
  );
}
