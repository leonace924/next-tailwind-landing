module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3.125rem',
        '6xl': '6.125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
