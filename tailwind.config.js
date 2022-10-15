/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#002855',
        'green': '#00B2A9',
        'gray': '#E65758',
        'orange': '#DA291C',
      }, 
      fontFamily: {
        main: ["main"],
        special: ["special"],
        mainBold: ["main-bold"],
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/gray-bg.jpg')",
      },
    },
  },
  plugins: [],
}
  
