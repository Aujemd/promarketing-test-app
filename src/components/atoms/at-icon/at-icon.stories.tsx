import type { Meta, StoryObj } from '@storybook/react'

import { AtIcon } from '.'
import { IconType } from './types'

const meta = {
  title: 'Atoms/AtIcon',
  component: AtIcon
} satisfies Meta<typeof AtIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    type: IconType['chevron-down']
  }
}
