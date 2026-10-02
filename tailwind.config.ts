import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        paper: "#f1f5f9",
        muted: "#64748b",
        auto: "#334155",
        ink: "#0f172a",
        clr: "#2563eb",
        "accent-strong": "#1d4ed8",
        "accent-dark": "#1e40af",
      },
    },
  },
  plugins: [animate, typography, scrollbar],
};
export default config;
