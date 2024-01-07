import type { Meta, StoryObj } from '@storybook/react'

import { AtCardLabel } from '.'
import { AtCardLabelSupplier } from './types'

const meta = {
  title: 'Atoms/AtCardLabel',
  component: AtCardLabel
} satisfies Meta<typeof AtCardLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    supplier: AtCardLabelSupplier.EVOPLAY
  }
}
