/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'purple': '#6600A5',
      'russian-voilet': '#2D0F51',
      'electric-purple': '#AF44F2',
      'gold-web-golden': '#FFD61E',
      'maximum-yellow': '#FFF835',
      'dark-charcoal': '#2f2f2f',
      'white':'#fff',
      'black':"#000000",
      'gray':"#C5C5C5",
      "dark-grey":"#333e48",
      "green":"#367E18"
    },
  },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
