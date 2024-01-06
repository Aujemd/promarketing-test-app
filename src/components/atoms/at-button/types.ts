import { IconType } from '../at-icon/types'

export enum AtButtonType {
  ONLY_ICON = 'only-icon',
  ICON_LEFT = 'icon-left',
  ICON_RIGHT = 'icon-right',
  CONTAINED = 'contained',
  OUTLINED = 'outlined'
}

export enum AtButtonVariant {
  PRIMARY = 'primary',
  ACCENT = 'accent'
}

export interface AtButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  labelClassName?: string
  ariaLabel?: string
  variant?: AtButtonVariant
  dataTestId?: string
  handleClick?: () => void
  icon?: IconType
  buttonType?: AtButtonType
  disabled?: boolean
}
