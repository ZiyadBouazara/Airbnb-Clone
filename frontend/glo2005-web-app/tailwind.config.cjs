const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "immofab": "#00aef0",
        "immofab-hover": "#008bc0",
      },
      fontFamily: {
        "sans": ["'Raleway'", "sans-serif", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
