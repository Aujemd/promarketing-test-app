import type { Preview } from '@storybook/react'
import '../tailwind/variables.css'
import '../src/index.css'
import '../tailwind/font.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
