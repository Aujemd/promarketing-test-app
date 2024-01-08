//* React Utilities
import React from 'react'

//* Types
import { AtIconProps, IconType } from './types'

//* SVGS

//* Outlined Icons
import { Wallet } from './icons/wallet'
import { ChevronDown } from './icons/chevron-down'

//* Filled Icons
import { ExclamationDark } from './icons/exclamation-dark'
import { ExclamationLight } from './icons/exclamation-light'
import { GiftLight } from './icons/gift-light'
import { GiftDark } from './icons/gift-dark'

export const icons: Record<IconType, (props: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  'chevron-down': (props) => <ChevronDown role='img' {...props} />,
  wallet: (props) => <Wallet role='img' {...props} />,
  'exclamation-dark': (props) => <ExclamationDark role='img' {...props} />,
  'exclamation-light': (props) => <ExclamationLight role='img' {...props} />,
  'gift-dark': (props) => <GiftDark role='img' {...props} />,
  'gift-light': (props) => <GiftLight role='img' {...props} />
}

export const AtIcon = ({ type, dataTestId, className, ...props }: AtIconProps) => {
  const icon = icons[type]

  if (icon) {
    return (
      <div data-testid={`${dataTestId}`}>
        {icon({ width: 20, height: 20, className: `tw-w-fit tw-h-fit ${className} `, ...props })}
      </div>
    )
  }
  return null
}
