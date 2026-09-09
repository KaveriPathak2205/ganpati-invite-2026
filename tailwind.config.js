/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7A1620",
          dark: "#4A0E14",
          light: "#9A2430",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E8CD7A",
          dark: "#8F721A",
        },
        saffron: "#E8871E",
        ivory: "#FBF3E3",
        ink: "#2B1810",
      },
      fontFamily: {
        display: ["'Yatra One'", "cursive"],
        body: ["'Poppins'", "sans-serif"],
        devanagari: ["'Noto Sans Devanagari'", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.25), transparent 60%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        petal: {
          "0%": { transform: "translateY(-10%) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(110%) rotate(180deg)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out both",
        petal: "petal linear infinite",
      },
    },
  },
  plugins: [],
};
