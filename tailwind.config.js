module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '3': '0 0 500px',
      '4': '0 0 700px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
