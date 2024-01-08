export enum IconType {
  'chevron-down' = 'chevron-down',
  'wallet' = 'wallet',
  'exclamation-dark' = 'exclamation-dark',
  'exclamation-light' = 'exclamation-light',
  'gift-light' = 'gift-light',
  'gift-dark' = 'gift-dark',
}

export interface AtIconProps extends React.SVGProps<SVGSVGElement> {
  type: IconType
  dataTestId?: string
}
