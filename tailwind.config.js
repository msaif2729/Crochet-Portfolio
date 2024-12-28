/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'fill-orange-200',
    'fill-blue-200',
    'fill-green-200',
    'fill-purple-200',
    'fill-cyan-200',
    'fill-yellow-200',
    'fill-lime-200'
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-100%)' },   // 1st element
          '40%': { transform: 'translateX(-200%)' },   // 2nd element
          '60%': { transform: 'translateX(-300%)' },   // 3rd element
          '80%': { transform: 'translateX(-400%)' },   // 4th element
          '100%': { transform: 'translateX(-500%)' },  // 5th element
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
    },
  },
  plugins: [],
}

