//* Media Files
// Importing images for different suppliers and sizes
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
// Importing type definition for the return type of the function
import { getSupplierImgReturnType } from './types'

// Function to get supplier images based on the specified supplier
export const getSupplierImg = (supplier: string): getSupplierImgReturnType => {
  // Switch statement to handle different suppliers
  switch (supplier) {
    case 'evoplay':
      // Return images for the 'evoplay' supplier in different sizes
      return {
        lg: lgEvoplay,
        md: mdEvoplay,
        sm: smEvoplay
      }
    case 'spinomenal':
      // Return images for the 'spinomenal' supplier in different sizes
      return {
        lg: lgSpinomenal,
        md: mdSpinomenal,
        sm: smSpinomenal
      }
    case 'playtech':
      // Return images for the 'playtech' supplier in different sizes
      return {
        lg: lgPlaytech,
        md: mdPlaytech
      }
    case 'pragmatic':
      // Return images for the 'pragmatic' supplier in different sizes
      return {
        lg: lgEvoplay, // Note: Using 'lgEvoplay' as a fallback for 'pragmatic' large size
        md: mdPragmatic
      }
    default:
      // Default case: Return images for the 'evoplay' supplier in different sizes
      return {
        lg: lgEvoplay,
        md: mdEvoplay,
        sm: smEvoplay
      }
  }
}
