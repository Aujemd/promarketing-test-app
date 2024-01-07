//* React Utilities
import React, { useState, useMemo } from 'react'
//* Next Utilities
import Image from 'next/image'
//* Types
import { MlCardProps } from './types'
//* Components
import { AtCardLabel } from '../../atoms/at-card-label'
import { AtCardLabelSupplier } from '../../atoms/at-card-label/types'
import { AtIcon } from '../../atoms/at-icon'
import { AtButton } from '../../atoms/at-button'
import { AtButtonVariant } from '../../atoms/at-button/types'
//* Styles
import {
  CardContainerClasses,
  CardIconsClasses,
  CardOverlayClasses,
  CardStatsClasses
} from './classes'
import { useCard } from './useCard'

export const MlCard = ({
  src,
  supplier = AtCardLabelSupplier.EVOPLAY,
  info,
  name,
  disabled = false
}: MlCardProps) => {
  //* State
  const { setIsHovered, showInfo, setShowInfo, giftIcon, exclamationIcon } = useCard()

  return (
    <>
      <div
        className={`${disabled ? 'tw-pointer-events-none' : ''} ${CardContainerClasses}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        [//* Card Icons]
        {!disabled && (
          <>
            <AtCardLabel
              supplier={supplier as AtCardLabelSupplier}
              className='tw-absolute tw-z-50 tw-left-[10px] tw-top-[10px]'
            />
            <AtIcon
              type={exclamationIcon}
              onClick={() => {
                setShowInfo(!showInfo)
              }}
              className={`${CardIconsClasses} ${
                showInfo ? 'tw-bottom-[6px] md:tw-bottom-4' : 'tw-top-[10px]'
              }`}
            />
          </>
        )}
        {info?.moodBonus && !disabled && (
          <AtIcon
            type={giftIcon}
            className={`tw-bottom-[6px] ${CardIconsClasses} ${
              showInfo ? 'tw-top-[10px]' : 'tw-bottom-[6px] md:tw-bottom-4'
            }`}
          />
        )}
        [//* Card Overlay]
        <div
          className={`${CardOverlayClasses}
          ${showInfo ? 'tw-opacity-100 !tw-justify-end' : 'tw-opacity-0'}
          ${disabled ? 'tw-opacity-100' : ''}
          `}
        >
          {name && !showInfo && (
            <p className='tw-invisible md:tw-visible tw-bottom-[18px] tw-left-[10px] tw-absolute tw-text-white  tw-text-base  tw-leading-4 tw-font-bold'>
              {name}
            </p>
          )}
          {showInfo && !disabled && (
            <div className=' tw-flex tw-flex-col tw-w-full tw-px-[7px] tw-mb-[26px] '>
              {name && (
                <p className=' tw-text-white  tw-text-[10px] tw-leading-[14px] tw-font-bold md:tw-text-base md:tw-leading-4'>
                  {name}
                </p>
              )}
              <div className='tw-flex tw-gap-1 tw-mt-[1px] md:tw-mt-[6px]'>
                {info?.version && (
                  <p className={`${CardStatsClasses}`}>{`version: ${info?.version}`}</p>
                )}
                {info?.rtp && <p className={`${CardStatsClasses}`}>{`rtp: ${info?.rtp}`}</p>}
              </div>
            </div>
          )}
          {!disabled && !showInfo && (
            <>
              <AtButton
                className='!tw-border-none !tw-px-[18px] !tw-py-2  tw-bg-accent-/60 !tw-rounded-lg'
                label='Jugar Ahora'
                variant={AtButtonVariant.ACCENT}
                labelClassName='tw-text-xs tw-leading-[14px]'
              />
            </>
          )}

          {disabled && (
            <AtButton
              disabled={disabled}
              className='!tw-border-none !tw-px-[18px] !tw-py-2 !tw-rounded-lg'
              label='No Disponible'
              labelClassName='tw-text-xs tw-leading-[14px]'
            />
          )}
        </div>
        [//* Card Image]
        <Image
          priority
          className='tw-rounded-lg'
          src={src ?? ''}
          alt='Card'
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    </>
  )
}
