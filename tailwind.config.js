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
      }, 
      backgroundImage: {
        'main': "url(/src/assets/test-img.jpg)"
      },
      screens: {
        'gf': '250px',
        'xs': '370px',
      },
      // theme: {
      //   screens: {
      //     'gf': '250px',
      //     'xs': '370px',
      //   },
      // },
    },
  },
  plugins: [],
}
