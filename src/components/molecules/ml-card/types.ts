//* React utilities
import { Dispatch, SetStateAction } from 'react'
//* Types
import { IconType } from '../../atoms/at-icon/types'

export interface MlCardProps {
  id?: number
  disabled?: boolean
  info?: MlCardInfo
  name?: string
  src?: string
  supplier?: string
}

export interface MlCardInfo {
  moodBonus?: boolean
  rtp?: string
  version?: string
}

export type useCardReturnType = {
  exclamationIcon: IconType
  giftIcon: IconType
  isHovered: boolean
  setIsHovered: Dispatch<SetStateAction<boolean>>
  showInfo: boolean
  setShowInfo: Dispatch<SetStateAction<boolean>>
}
