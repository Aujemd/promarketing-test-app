import type { Meta, StoryObj } from '@storybook/react'

import { MlCard } from '.'
import { MlCardProps } from './types'

const meta = {
  title: 'Molecules/MlCard',
  component: MlCard
} satisfies Meta<typeof MlCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cardId: 3,
    disabled: false,
    info: {
      moodBonus: true,
      rtp: '98.16%',
      version: 'V-852'
    },
    name: ' Bikini Island Deluxe',
    src: 'https://cdn.wcbackoffice.com/winchile/providers/habanero/normal/SGBikiniIslandDeluxe.jpeg',
    supplier: 'evoplay',
    className: 'tw-max-w-[250px]'
  } as MlCardProps
}
