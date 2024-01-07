//* Media Files
import lgEvoplay from '../../../assets/images/lgEvoplay.png'
import mdEvoplay from '../../../assets/images/mdEvoplay.png'
import smEvoplay from '../../../assets/images/smEvoplay.png'
import lgSpinomenal from '../../../assets/images/lgSpinomenal.png'
import mdSpinomenal from '../../../assets/images/mdSpinomenal.png'
import smSpinomenal from '../../../assets/images/smSpinomenal.png'
import lgPlaytech from '../../../assets/images/lgPlaytech.png'
import mdPlaytech from '../../../assets/images/mdPlaytech.png'
import mdPragmatic from '../../../assets/images/mdPragmatic.png'

//* Types
import { getSupplierImgReturnType } from './types'

export const getSupplierImg = (supplier: string): getSupplierImgReturnType => {
  switch (supplier) {
    case 'evoplay':
      return {
        lg: lgEvoplay,
        md: mdEvoplay,
        sm: smEvoplay
      }
    case 'spinomenal':
      return {
        lg: lgSpinomenal,
        md: mdSpinomenal,
        sm: smSpinomenal
      }
    case 'playtech':
      return {
        lg: lgPlaytech,
        md: mdPlaytech
      }
    case 'pragmatic':
      return {
        lg: lgEvoplay,
        md: mdPragmatic
      }
    default:
      return {
        lg: lgEvoplay,
        md: mdEvoplay,
        sm: smEvoplay
      }
  }
}
