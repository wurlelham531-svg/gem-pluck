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
          content="c56219c08f220f37fbe3f412069416302bbdbd17b7fffe05d703540027e302e618beebd65d1fcaff90a5150d78d36f76926fbacc9a155487fdd0c2b75a6c125d"
        />
      </head>
      <body className="min-h-screen text-white antialiased relative">
        <StacksProvider>{children}</StacksProvider>
      </body>
    </html>
  );
}
