import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0d0e",
        primary: "#f9f4da",
        secondary: "#c7a6d1",
        accent: "#86e1d8",
        muted: "#b9b5a1",
        card: "#1a1718",
        border: "#2c2a2b",
        "border-hover": "#3d3a3b",
      },
      fontFamily: {
        sans: ["iAWriterQuattroS", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
