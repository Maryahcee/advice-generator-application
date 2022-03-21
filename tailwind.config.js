const { slotFlagsText } = require("@vue/shared");

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'darker-green': '#52ffab',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
