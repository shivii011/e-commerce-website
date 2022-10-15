/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue': '#002855',
        'green': '#00B2A9',
        'gray': '#E6E7E8',
        'orange': '#DA291C',
      },
      fontFamily: {
        main: ["main"],
        special: ["special"],
        mainBold: ["main-bold"],
      },
    },
  },
  plugins: [],
}
