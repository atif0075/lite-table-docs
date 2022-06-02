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
    },
  },
  plugins: [],
})
