const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  mode: 'jit', // or 'media' or 'class'
  theme: {
    colors: {
      page: {
        DEFAULT: '#F6F8FE'
      },
      primary: {
        DEFAULT: '#2DDC9F'
      }, 
      secondary: {
        DEFAULT: 'yellow'
      },
      danger: {
        DEFAULT: 'red'
      },
      success: {
        DEFAULT: 'green'
      },
      ...colors
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}