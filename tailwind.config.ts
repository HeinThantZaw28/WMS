import type { Config } from "tailwindcss";

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
      colors: {
        primary: "#e2e8f0", //white
        secondary: "#64748b", //gray
        tertirary:'#818cf8', //violet
        darkPrimary: "#0f172a", //black
        darkSecondary: "#6366f1", //indigo
        danger:'#ef4444', //red
      },
    },
  },
  plugins: [],
};
export default config;
