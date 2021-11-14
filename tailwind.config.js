module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },
      backgroundImage: {
        'hero-ball': "url('../img/hero_virus.png')",
      },
      colors: {
        brand: {
          DEFAULT: '#5DC1B7',
          primary: '#02A3A3',
          secondary: '#98D9D5',
          light: '#E6F3F7',
          dark: '#05789E'
        },
        neutral: {
          darkestblack: '#272727',
          gray1: '#5D5D5D',
          gray2: '#BEBEBE',
          lightgray: '#F5F5F5',
          purewhite: '#FFFFFF'
        }
      }
  }    
  },
  variants: {},
  plugins: [],
}
