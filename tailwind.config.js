/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#4a624e",
      black: "#000000",
      white: "#ffffff",
      beige: "#b28557",
      pink: "#F9BBD6",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
