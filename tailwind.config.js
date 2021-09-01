module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      softblue: '#bce0e71a'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
