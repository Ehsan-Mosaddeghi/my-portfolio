import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
      },
      backgroundColor: {
        background: "var(--background)",
      },

      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        shine: "shine var(--duration) infinite linear",
        "shiny-text": "shiny-text 8s infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - 100px) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + 100px) 0",
          },
        },
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "800px",
          xl: "1000px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
