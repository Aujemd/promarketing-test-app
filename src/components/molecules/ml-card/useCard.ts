import { IconType } from '../../atoms/at-icon/types'
import React, { useMemo, useState } from 'react'
import { useCardReturnType } from './types'

export const useCard = (): useCardReturnType => {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const exclamationIcon = useMemo<IconType>(() => {
    return isHovered || showInfo ? IconType['exclamation-light'] : IconType['exclamation-dark']
  }, [isHovered, showInfo])

  const giftIcon = useMemo<IconType>(() => {
    return isHovered || showInfo ? IconType['gift-light'] : IconType['gift-dark']
  }, [isHovered, showInfo])
  return {
    exclamationIcon,
    giftIcon,
    isHovered,
    setIsHovered,
    showInfo,
    setShowInfo
  }
}
