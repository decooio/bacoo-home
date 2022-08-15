module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        danger: "#F37565",
      },
    },
    fontSize: {
      '10': '.714rem',
      '12': '.857rem',
      '14': '1rem',
      '16': '1.143rem',
      '18': '1.286rem',
      '24': '1.714rem',
      '30': '2.143rem',
      '42': '3rem',
      '58': '4.143rem,'
    },
    fontFamily: false
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
