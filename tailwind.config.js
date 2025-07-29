/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary color common across themes
        light: {
          background: "#f8fafc", // Light background white
          text: "#2563EB", //blue-600
          accent: "#56ace6", //light blue
          primary: "#0073B1", //blue
          secondary: "#94c5e5", //light blue
          border: "#E1E9EE",
        },
        dark: {
          background: "#111924", // Dark background
          text: "#2563EB", // blue-600
          accent: "#A3B1AF", // Accent color for dark mode
          secondary: "#D1D5DB", // Secondary dark shade
          border: "#0073B1", // Dark border color
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      animation: {
        "gradient-move": "gradientShift 4s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "top",
          },
          "50%": {
            backgroundPosition: "bottom",
          },
        },
      },
    },
  },

  plugins: [daisyui],
};
