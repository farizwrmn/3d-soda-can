/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-alpino)", "sans-serif"],
      },
      animation: {
        wave: "wave 2s infinite ease-in-out",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(2px)" },
          "50%": { transform: "translateX(0px)" },
          "75%": { transform: "translateX(-2px)" },
        },
      },
      animation: {
        "slide-left": "slide-left 3s linear infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
