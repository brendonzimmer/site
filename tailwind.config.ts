import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "auto--": colors.slate[100],
        "auto-": colors.slate[500],
        auto: colors.slate[700],
        "auto+": colors.slate[900],
        clr: colors.blue[600],
        "clr+": colors.blue[700],
        "clr++": colors.blue[800],
      },
    },
  },
  plugins: [],
};
export default config;
