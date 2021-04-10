const config = require('./revitail/tailwind.config.js')

module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './revitail/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: config.theme,
  plugins: config.plugins,
}
