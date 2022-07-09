import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      dark: '#001E26',
      'light-dark': '#003543',
      green: '#00DC82',
      gray: '#f1f1f1',
      'light-gray': '#d1e2e2',
    },
    extend: {
      fontFamily: {
        "code": "'Dank Mono', monospace",

      },
    },
  },
  shortcuts: {
    'flex-bet': 'flex justify-between items-center',
    'flex-cen': 'flex justify-center items-center',
    'flex-end': 'flex justify-end items-center',
    'flex-start': 'flex justify-start items-center',
    'flex-colm': 'flex flex-col',
  },
  plugins: [],
})
