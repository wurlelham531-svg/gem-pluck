import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: { "2xs": ["0.65rem", "1rem"] },
      screens: { xs: "480px" },
      zIndex: { 60: "60", 70: "70", 80: "80" },
      transitionDuration: { 400: "400ms", 600: "600ms" },
      colors: {
        ruby:     "#e02060",
        sapphire: "#2060e0",
        emerald:  "#20c060",
        topaz:    "#e0a020",
        amethyst: "#a020e0",
        onyx:     "#404040",
        primary:   "#a020e0",
        secondary: "#c489ff",
        accent:    "#ff4ec5",
        dark:        "#0c0418",
        "dark-card": "rgba(28, 14, 46, 0.72)",
        "dark-border": "rgba(160, 32, 224, 0.22)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(160, 32, 224, 0.35), 0 0 40px rgba(255, 78, 197, 0.18)",
        "glow-sm": "0 0 10px rgba(160, 32, 224, 0.25)",
        card: "0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
export default config;
