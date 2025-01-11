/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'misty-white': 'linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))', // Xira oq gradient
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      fontFamily: {
        afacad: ["Afacad Flux", 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],}
