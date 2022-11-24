/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT :"#47F2A0",
          light: "#e9faf9",
        }
      }
    },
  },
  plugins: [],
}