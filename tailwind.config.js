const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: colors.trueGray
      },
      borderRadius: {
        '3xl': '2.75rem',
        '4xl': '3.25rem'
      }
    }
  }
}
