/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: '#06283D',
        secondary: '#1363DF',
        third: '#1575b6',
        forth: '#DFF6FF',
        overlay: 'rgba(0, 0, 0, 0.54)',
      },
      keyframes: {
        'scale-in': {
          '0%': {
            '-webkit-transform': 'translateX(120%)',
            transform: 'scale(0%)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'scale(100%)',
          },
        },
        'according-animation-in': {
          '0%': {
            '-webkit-transform': 'translateY(100%)',
            transform: 'scale(0%)',
          },
          '100%': {
            '-webkit-transform': 'translateY(0%)',
            transform: 'scale(100%)',
          },
        },
        'according-animation-out': {
          '0%': {
            '-webkit-transform': 'translateY(0%)',
          },
          '50%': {
            '-webkit-transform': 'translateY(-50%)',
          },
          '100%': {
            '-webkit-transform': 'translateY(-100%)',
          },
        },
      },
      animation: {
        'scale-in': 'scale-in 0.5s ease-out',
        'according-animation-in': 'according-animation-in 0.8s ease-in-out',
        'according-animation-out': 'according-animation-out 1s ease',
      },
    },
  },
};
