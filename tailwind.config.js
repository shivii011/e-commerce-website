/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-charcoal' : '#2F2F2F',
        'russian-violet' : '#2D0F51',
        'purple' : '#6600A5',
        'electric-purple' : '#AF44F2',
        'gold-web-golden' : '#FFD61E',
        'maximum-yellow' : '#FFF835',
      },
      backgroundImage: {
        'hero' : "url('/src/assets/gray-bg.jpg')",
      },
    },
  },
  plugins: [],
}
