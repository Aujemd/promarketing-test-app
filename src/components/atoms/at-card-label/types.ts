//* Next Utilities
import { StaticImageData } from 'next/image'

export enum AtCardLabelSupplier {
  PLAYTECH = 'playtech',
  EVOPLAY = 'evoplay',
  PRAGMATIC = 'pragmatic',
  SPINOMENAL = 'spinomenal'
}

export interface AtCardLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  supplier: AtCardLabelSupplier
  containerClassName?: string
  dataTestId?: string
}

export type getSupplierImgReturnType = {
  lg: StaticImageData
  md: StaticImageData
  sm?: StaticImageData
}
