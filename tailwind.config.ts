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
      },
      fontFamily: {
        sans: ["iAWriterQuattroS", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
