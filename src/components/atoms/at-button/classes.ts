import { AtButtonType, AtButtonVariant } from './types'

export const AtButtonBaseClasses: string =
  ' tw-rounded-xl tw-inline-flex tw-justify-center tw-items-center tw-gap-[6px] disabled:tw-bg-neutral-gray-light disabled:tw-pointer-events-none'

export const AtButtonLabelBaseClasses = 'tw-uppercase tw-font-bold tw-text-xl tw-leading-6'

export const AtButtonLabelDisabledClasses = 'tw-text-neutral-gray-dark'

export const AtButtonIconClasses: Record<AtButtonType, string> = {
  [AtButtonType.OUTLINED]: 'tw-hidden',
  [AtButtonType.CONTAINED]: 'tw-hidden',
  [AtButtonType.ICON_LEFT]: 'tw--order-1',
  [AtButtonType.ICON_RIGHT]: '',
  [AtButtonType.ONLY_ICON]: ''
}

export const AtButtonLabelClasses: Record<AtButtonType, string> = {
  [AtButtonType.OUTLINED]: '',
  [AtButtonType.CONTAINED]: '',
  [AtButtonType.ICON_LEFT]: '',
  [AtButtonType.ICON_RIGHT]: '',
  [AtButtonType.ONLY_ICON]: 'tw-hidden'
}

export const getButtonVariantClasses = (variant: AtButtonVariant, type: AtButtonType): string => {

  const isOutlined: boolean = type === AtButtonType.OUTLINED ?? false

  switch (variant) {
    case AtButtonVariant.PRIMARY:
      return `${
        !isOutlined
          ? 'tw-bg-primary tw-text-white tw-px-8 tw-py-[14px] hover:tw-bg-primary-HOVER active:tw-border-primary active:tw-border active:tw-px-[31px] active:tw-py-[13px]'
          : 'tw-border-primary tw-text-primary tw-border-2 tw-px-[30px] tw-py-3 active:tw-bg-primary-HOVER active:tw-text-white hover:tw-bg-primary-outlined-hover disabled:tw-border-neutral-gray-dark disabled:tw-bg-transparent'
      }`
    case AtButtonVariant.ACCENT:
      return `${
        !isOutlined
          ? 'tw-bg-accent tw-text-white tw-px-8 tw-py-[14px] hover:tw-bg-accent-HOVER active:tw-border-accent active:tw-border active:tw-px-[31px] active:tw-py-[13px]'
          : 'tw-border-accent tw-text-accent tw-border-2 tw-px-[30px] tw-py-3 active:tw-bg-accent-HOVER active:tw-text-white hover:tw-bg-accent-outlined-hover disabled:tw-border-neutral-gray-dark disabled:tw-bg-transparent'
      }`
    default:
      return ''
  }
}
