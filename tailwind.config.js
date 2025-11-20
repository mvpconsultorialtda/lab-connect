/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#ffa552', // Light Orange
          secondary: '#de6623', // Rust/Dark Orange
          dark: '#0d0d0d', // Black
          gray: '#e6e9e9', // Light Gray
          navy: '#121424', // Dark Navy
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fallback/Body text
        display: ['"CocogoosePra Trial"', 'sans-serif'], // Headings
      }
    },
  },
  plugins: [],
}
