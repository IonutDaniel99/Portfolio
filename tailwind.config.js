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
      colors: {
        'redHalf': 'rgba(255, 0, 0, 0.5)',
        'purpleQuarter': 'rgba(123, 0, 154, 0.5)',
        'blueHalf': 'rgba(0, 26, 255, 0.5)'
      },
      backgroundColor: {
        'darkNotDark': "#23272A",
      },
      fontSize: {
        12: '12px'
      },
      animation: {
        'spin-slow': 'spinning 10s linear infinite',
      },
      keyframes: {
        spinning: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
