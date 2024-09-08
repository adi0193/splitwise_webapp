/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      darkMode: 'class',

      fontFamily: {
         
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',  // A beautiful indigo for your buttons and headers
        secondary: '#F472B6',
        accent: '#F6AD55', 
         // Light pink for hover effects and borders
      },
    },
  },
  plugins: [],
}

