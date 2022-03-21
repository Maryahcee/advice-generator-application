const { slotFlagsText } = require("@vue/shared");

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'darker-green': '#52ffab',
      },
      screens: {
        'small': {'raw': '(max-width: 768px)'}
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
