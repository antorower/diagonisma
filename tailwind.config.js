/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mansalva: ["Mansalva", "cursive"],
        geologica: ["Geologica", "sans-serif"],
        "dela-gothic": ['"Dela Gothic One"', "sans-serif"],
      },
      keyframes: {
        bounceRight: {
          "0%, 100%": { transform: "translateX(0%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateX(25%)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
      },
      animation: {
        bounceRight: "bounceRight 1s infinite",
      },
    },
  },
  plugins: [],
};
