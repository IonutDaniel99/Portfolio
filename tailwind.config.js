/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'mobile': '425px',
      'tablet': '768px',
      'laptop': '1366px',
      'desktop': '1920px',
    },
    fontFamily: {
      AlexBrush: ['Alex Brush', 'cursive'],
      BebasNeue: ['Bebas Neue', 'cursive'],
      PaulGrotesk: ['Source Sans Pro', 'sans-serif'],
      Mitr: ['Mitr', 'normal'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        redHalf: 'rgba(255, 0, 0, 1)',
        purpleQuarter: 'rgba(123, 0, 154, 1)',
        blueHalf: 'rgba(0, 26, 255, 1)',
        darkNotDark: '#23272A',
      },
      backgroundColor: {
        darkNotDark: '#23272A',
      },
      fontSize: {
        12: '12px',
        32: [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '0px',
          },
        ],
      },
      animation: {
        'spin-slow': 'spinning 10s infinite',
      },
      keyframes: {
        spinning: {
          '0%': { transform: 'rotateZ(0deg)' },
          '50%': { scale: '1 1.5' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
