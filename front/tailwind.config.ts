import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Reemplaza 'Roboto' por tu fuente
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "navbar-gradient-navbar":
          "linear-gradient(180deg, #742dce 18%, #430b6b 73%, #000000 100%)",
        "navbar-gradient-footer":
          "linear-gradient(180deg, #000000 0%,  #742dce 27%)",
      },
      button: {
        navLink:
          "background-image: linear-gradient(to right, #2b5876 0%, #4e4376  51%, #2b5876  100%,)",
      },
    },
  },
  plugins: [],
};
export default config;
