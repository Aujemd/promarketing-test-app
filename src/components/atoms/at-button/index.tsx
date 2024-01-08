//* React Utilities
import React, { useCallback } from 'react'
//* Components
import { AtIcon } from '../at-icon'

//* Types
import { AtButtonProps, AtButtonType, AtButtonVariant } from './types'
//** Styles
import {
  AtButtonBaseClasses,
  AtButtonIconClasses,
  AtButtonLabelBaseClasses,
  AtButtonLabelClasses,
  AtButtonLabelDisabledClasses,
  getButtonVariantClasses
} from './classes'

// eslint-disable-next-line react/display-name
export const AtButton = React.forwardRef(
  (
    {
      label,
      dataTestId,
      ariaLabel,
      className,
      variant = AtButtonVariant.PRIMARY,
      icon,
      buttonType = AtButtonType.CONTAINED,
      labelClassName,
      disabled = false,
      ...props
    }: AtButtonProps,
    ref: React.LegacyRef<HTMLButtonElement> | undefined
  ) => {
    const getIconElement = useCallback((): JSX.Element | null => {
      if (icon) {
        return (
          <div
            className={`tw-flex tw-items-center ${AtButtonIconClasses[buttonType]} ${
              disabled ? AtButtonLabelDisabledClasses : ''
            }`}
          >
            <AtIcon
              className={`tw-text-inherit `}
              dataTestId={`${dataTestId}-at-icon`}
              type={icon}
            />
          </div>
        )
      }
      return null
    }, [buttonType, dataTestId, disabled, icon])

    return (
      <button
        {...props}
        disabled={disabled}
        className={`${AtButtonBaseClasses} ${getButtonVariantClasses(variant, buttonType)} ${
          className ?? ''
        } `}
        ref={ref}
        data-testid={`${dataTestId}`}
        aria-label={ariaLabel ?? ''}
      >
        {label ? (
          <span
            className={`${AtButtonLabelBaseClasses} ${
              AtButtonLabelClasses[buttonType]
            } ${labelClassName} ${disabled ? AtButtonLabelDisabledClasses : ''}`}
          >
            {label}
          </span>
        ) : null}
        {getIconElement()}
      </button>
    )
  }
)
