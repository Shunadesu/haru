/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "index.jsx"],
  theme: {
    extend: {
      colors: {
        start: "#f09433", // Start color
        mid1: "#e6683c", // Middle color 1
        mid2: "#dc2743", // Middle color 2
        mid3: "#cc2366", // Middle color 3
        mid4: "#bc1888", // End color
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
