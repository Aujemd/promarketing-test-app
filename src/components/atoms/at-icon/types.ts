export enum IconType {
  'chevron-down' = 'chevron-down',
  'wallet' = 'wallet'
}

export interface AtIconProps extends React.SVGProps<SVGSVGElement> {
  type: IconType
  dataTestId?: string
}
