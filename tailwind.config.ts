import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "#4163E7",
        hover: "#738AE1",
        input: "#e8e8e8",
      },
      backgroundColor: {
        base: "#F7F8FB",
        background: "#EBEFFF",
      },
      borderColor: {
        default: "#4163E7",
        grey: "#e8e8e8",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwind-scrollbar-hide")],
};
export default config;
