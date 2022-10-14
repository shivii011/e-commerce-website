/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'gf': '250px',
      'xs': '370px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'blue': '#002855',
        'green': '#00B2A9',
        'gray': '#E65758',
        'orange': '#DA291C',
      },
      backgroundImage: {
        'gray-bg': "url('/src/assets/gray-bg.jpg')",
      },
      fontFamily: {
        main: ["main"],
        special: ["special"],
        mainBold: ["main-bold"],
      }
    },
  },
  plugins: [],
}
