import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
     
      fontFamily:{
        title: ['var(--title-font)'],
        normal: ['var(--normal-font)']
      },
      colors: {
        accent: "#438AD2",
        detail: "#E6ECF2",
        accent2: "#435DD1",
        dark: "#171717",
        dark2: "#2E2E2E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
