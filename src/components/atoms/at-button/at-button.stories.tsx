import type { Meta, StoryObj } from '@storybook/react'

import { AtButton } from '.'
import { IconType } from '../at-icon/types'
import { AtButtonType } from './types'

const meta = {
  title: 'Atoms/AtButton',
  component: AtButton
} satisfies Meta<typeof AtButton>

export default meta
type Story = StoryObj<typeof meta>

export const OnlyIcon: Story = {
  args: {
    label: 'Button',
    icon: IconType['wallet'],
    buttonType: AtButtonType.ONLY_ICON,
    dataTestId: 'test',
    ariaLabel: 'test-button'
  }
}

export const IconLeft: Story = {
  args: {
    label: 'Button',
    icon: IconType['wallet'],
    buttonType: AtButtonType.ICON_LEFT,
    dataTestId: 'test',
    ariaLabel: 'test-button'
  }
}

export const IconRight: Story = {
  args: {
    label: 'Button',
    icon: IconType['wallet'],
    buttonType: AtButtonType.ICON_RIGHT,
    dataTestId: 'test',
    ariaLabel: 'test-button'
  }
}

export const Contained: Story = {
  args: {
    label: 'Button',
    buttonType: AtButtonType.CONTAINED,
    dataTestId: 'test',
    ariaLabel: 'test-button',
    className: 'tw-px-8 tw-py-4'
  }
}

export const Outlined: Story = {
  args: {
    label: 'Button',
    buttonType: AtButtonType.OUTLINED,
    dataTestId: 'test',
    ariaLabel: 'test-button'
  }
}
