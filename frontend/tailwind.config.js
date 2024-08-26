/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greyBackground: '#f0f4f7',
        whiteBackground: '#ffffff',
        redActive: '#ef3e36',
        pinkHover: '#f3dbdc',
        priceRangeBar: '#ea8e8c',
        genreButton: '#6e6e6e',
      },
    },
  },
  plugins: [],
}
