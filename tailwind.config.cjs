/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        /* hero: "url('../public/CaseStudyOne-bg.jpg')", */
        "hero-pattern": "url('/CaseStudyOneBg.jpg')",
      },
      boxShadow: {
        "3xl": "box-shadow: -1px -1px 128px 39px rgba(139,139,139,1);",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "1",
            transform: "translateX(-1200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        ...defaultTheme.keyframes,
      },
      animation: {
        "fade-in-down": "fade-in-down 0.25s ease-out",
        "fade-in": "fade-in 0.25s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.25s ease-out",
        ...defaultTheme.animation,
      },
    },
  },
  plugins: [],
};
