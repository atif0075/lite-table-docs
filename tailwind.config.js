/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#282828",
        green: "#059669",
        gray: "#f1f1f1",
        "light-gray": "#a1a1aa",
      },
      fontFamily: {
        code: "'Dank Mono', monospace",
      },
      zIndex: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, cur) => {
          acc[cur] = cur;
          return acc;
        }, {}),
      },
    },
  },
  safelist: [],

  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".flex-bet": {
          "@apply flex justify-between items-center": {},
        },
        ".flex-cen": {
          "@apply flex justify-center items-center": {},
        },
        ".flex-start": {
          "@apply flex justify-start items-center": {},
        },
        ".flex-end": {
          "@apply flex justify-end items-center": {},
        },
        ".flex-colm": {
          "@apply flex flex-col": {},
        },
        ".glass": {
          "@apply bg-secondary bg-opacity-70 backdrop-filter backdrop-blur-lg":
            {},
        },
        ".hd-1": {
          "@apply text-4xl md:text-7xl font-bold mb-5": {},
        },
        ".btn": {
          "@apply focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md":
            {},
        },
        ".btn-error": {
          "@apply bg-red-100 text-red-900 hover:bg-red-200 focus-visible:ring-red-500":
            {},
        },
        ".btn-success": {
          "@apply bg-green-100 text-green-900 hover:bg-green-200 focus-visible:ring-green-500":
            {},
        },
        ".btn-normal": {
          "@apply bg-deep-purple-100 text-deep-purple-900 hover:bg-deep-purple-200 focus-visible:ring-deep-purple-500":
            {},
        },
      });
    },
  ],
};
