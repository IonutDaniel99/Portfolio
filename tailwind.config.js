/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'AlexBrush': ['Alex Brush', 'cursive'],
      'BebasNeue': ['Bebas Neue', 'cursive'],
      'PaulGrotesk': ['Source Sans Pro', 'sans-serif'],
      'Mitr': ['Mitr', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      fontSize: {
        12: '12px'
      },
    },
  },
  plugins: [],
}
