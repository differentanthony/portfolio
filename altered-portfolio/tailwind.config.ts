import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          bg:      "#0A0F0A",
          surface: "#122212",
          raised:  "#1E3A1E",
          accent:  "#2D5A2D",
          hover:   "#4A7C4A",
          text:    "#C8D8C0",
          heading: "#E8F0E0",
        },
      },
      fontFamily: {
        sans:  ["var(--font-sans)", "sans-serif"],
        mono:  ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
