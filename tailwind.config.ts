import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F2747",
          green: "#8BC53F",
          mist: "#F4F7F8",
          ink: "#213041",
          sand: "#D7E0E5",
        },
      },
      fontFamily: {
        heading: ["Impact", "Haettenschweiler", "'Arial Narrow Bold'", "sans-serif"],
        body: ["'Trebuchet MS'", "'Segoe UI'", "'Helvetica Neue'", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 45px -28px rgba(15, 39, 71, 0.35)",
      },
      backgroundImage: {
        "site-grid":
          "linear-gradient(rgba(15,39,71,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,39,71,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
