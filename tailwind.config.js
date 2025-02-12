/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "text-green-600",
    "text-amber-500",
    "text-red-500",
    "border-green-600",
    "border-amber-500",
    "border-red-500",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      borderBottom: {
        1: "1px",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
