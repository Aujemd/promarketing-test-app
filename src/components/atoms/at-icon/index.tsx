//* React Utilities
import React from 'react'

//* Types
import { AtIconProps, IconType } from './types'

//* SVGS
import { Wallet } from './icons/wallet'
import { ChevronDown } from './icons/chevron-down'

export const icons: Record<IconType, (props: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  'chevron-down': (props) => <ChevronDown role='img' {...props} />,
  wallet: (props) => <Wallet role='img' {...props} />
}

export const AtIcon = ({ type, dataTestId, ...props }: AtIconProps) => {
  const icon = icons[type]

  if (icon) {
    return (
      <div data-testid={`at-icon_${type}_${dataTestId}`}>
        {icon({ width: 20, height: 20, ...props })}
      </div>
    )
  }
  return null
}
