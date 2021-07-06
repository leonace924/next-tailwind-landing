module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '4xl': '2.5rem',
        '4.5xl': '2.8125rem',
        '5xl': '3.125rem',
        '6xl': '5.625rem',
        '7xl': '6.125rem',
        '8.5xl': '7.5rem',
      },
      padding: {
        25: '6.25rem',
        landscape: '75%',
        'x-landscape': '60%',
        portrait: '133%',
        square: '100%',
      },
      gap: {
        25: '6.25rem',
      },
      lineHeight: {
        'extra-tight': '1.125',
      },
      margin: {
        13: '3.125rem',
        25: '6.25rem',
      },
      zIndex: {
        1000: 1000,
      },
      borderRadius: {
        '4xl': '2.75rem',
      },
      width: {
        50: '12.5rem',
      },
      maxWidth: {
        '3.25xl': '50rem',
      },
      colors: {
        'light-gray': '#666',
      },
      backgroundColor: {
        'light-yellow': '#FEFEED',
        'sticky-light': 'rgba(237, 237, 255, 0.9)',
      },
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      'light-gray': '#cccccc',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
