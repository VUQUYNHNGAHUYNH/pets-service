/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005665",
          hover: "#00827C",
        },
        cream: "#ebe3cc",
        teal: "#189cab",
        orange: {
          DEFAULT: "#ed5c01",
          hover: "#e45a03",
        },
        yellow: "#fbbd08",
      },
    },
  },
  plugins: [],
};
