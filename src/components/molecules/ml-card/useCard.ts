//* React Utilties
import { useMemo, useState } from 'react'

//* Types
import { IconType } from '../../atoms/at-icon/types'
import { useCardReturnType } from './types'

// React hook for managing card-related state and icons
export const useCard = (): useCardReturnType => {
  // State variables for managing card state
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  // Memoized icon for the exclamation mark based on hover and showInfo state
  const exclamationIcon = useMemo<IconType>(() => {
    return isHovered || showInfo ? IconType['exclamation-light'] : IconType['exclamation-dark']
  }, [isHovered, showInfo])

  // Memoized icon for the gift based on hover and showInfo state
  const giftIcon = useMemo<IconType>(() => {
    return isHovered || showInfo ? IconType['gift-light'] : IconType['gift-dark']
  }, [isHovered, showInfo])

  // Return the necessary values and functions for the component
  return {
    exclamationIcon,
    giftIcon,
    isHovered,
    setIsHovered,
    showInfo,
    setShowInfo
  }
}
