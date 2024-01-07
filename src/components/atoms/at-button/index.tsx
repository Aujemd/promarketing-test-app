//* React Utilities
import React, { useCallback, useState } from 'react'
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
import { AtIcon } from '../at-icon'

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
      handleClick,
      disabled = false,
      ...props
    }: AtButtonProps,
    ref: React.LegacyRef<HTMLButtonElement> | undefined
  ) => {
    const getIconElement = useCallback(() => {
      if (icon) {
        return (
          <div
            className={`tw-flex tw-items-center ${AtButtonIconClasses[buttonType]} ${
              disabled ? AtButtonLabelDisabledClasses : ''
            }`}
          >
            <AtIcon className={`tw-text-inherit `} dataTestId={dataTestId} type={icon} />
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
        data-testid={`at-button_${dataTestId}`}
        aria-label={ariaLabel ?? ''}
        onClick={handleClick}
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
