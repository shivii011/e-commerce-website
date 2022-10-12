/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow":"#fff835",
        'purple':'#6600A5',
        'russian-violet':'#2D0F51',
        'white':'#fff',
        'black':"#000000",
        'gray':"#C5C5C5",
        "dark-gray":"#333e48",
        "green":"#367E18"
      },
      fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
