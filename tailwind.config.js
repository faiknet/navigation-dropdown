/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '820px',
      'xs': '520px',
      'xxs': '330px'
    },
    fontFamily: {
      'epilogue': ['Epilogue', 'sans-serif']
    },
    colors: {
      'almostWhite': 'hsl(0, 0%, 98%)',
      'almostBlack': 'hsl(0, 0%, 8%)',
      'medGray': 'hsl(0, 0%, 41%)',
      'black': 'hsl(0, 0%, 0%)'
    }
  },
  plugins: [],
}
