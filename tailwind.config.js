const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'brand-violet': 'hsl(257, 40%, 49%)',
        'brand-magenta': 'hsl(300, 69%, 71%)'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
