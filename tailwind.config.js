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
        '5xl': '3.125rem',
        '6xl': '6.125rem',
      },
      padding: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
