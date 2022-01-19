module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      softblue: '#d6f1f7',
      'gray-400': '#eff0f0'
    },
    extend: {
      backgroundImage: {
        'welcome-img': "url('/images/woman-with-headset-full.png')",
        'class-img': "url('/images/woman-with-laptop-full.png')"
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        pallete: {
          primary: '#005365',
          'primary-focus': '#045E67',
          'primary-content': '#ffffff',
          'primary-soft': '#f4fcff',
          secondary: '#01818E',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          accent: '#ECCE76',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724'
        }
      },
      'light',
      'cupcake'
    ]
  }
};
