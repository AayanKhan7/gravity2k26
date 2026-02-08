/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom extra-small breakpoint
      },
      colors: {
        'neon-cyan': '#29B6F6',
        'neon-gold': '#FFE81F',
        'neon-red': '#FF3B3B',
        'neon-purple': '#D500F9',
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
