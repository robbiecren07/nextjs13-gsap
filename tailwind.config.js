// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-reg)', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      fontSize: {
        '11xl': '11rem',
        '15xl': '15rem',
        '17xl': '17.5rem',
      },
      colors: {
        'dark': '#1F1F1F',
        //'black': '#1F1F1F',
        'offwhite': '#fcfaf8',
        'ltblue': '#0353a4',
        'dkblue': '#1d3557',
        'artic': '#f9fcff',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.3',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/12': '16 / 12',
        '16/11': '16 / 11',
      }
    },
  },
  plugins: [],
}
