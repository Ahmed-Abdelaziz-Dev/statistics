/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        'main': ['"Helvetica Neue"', 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
      }
    },
  },
  
  plugins: [],
}


