import type { Config } from 'tailwindcss'
const { theme } = require('./tailwind/tailwind.theme')

const config: Config = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/preview.js'],
  theme
}
export default config
