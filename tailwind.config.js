module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)'
      },
      neutral: {
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': '#766cf1',
        'dark-blue': 'hsl(223, 47%, 23%)'
      },
      white: "#FFF",
      black: "#000",
      grey: {
        pale: "#f8f9fe",
        dark: "#969caa"
      }
    },
    extends: {
      fontFamily: { 'red-hat-display': ['Red Hat Display', 'sans-serif'] }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}