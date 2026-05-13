/** @type {import('tailwindcss').Config} */
const colors = require('./src/tokens/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        display: ['Fugaz One', 'Impact', 'sans-serif'],
        body: ['Lora', 'Georgia', 'serif'],
        ui: ['Work Sans', 'system-ui', 'sans-serif'],
        brush: ['Nanum Brush Script', 'cursive'],
      },
    },
  },
  plugins: [],
};