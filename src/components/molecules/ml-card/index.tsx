//* React Utilities
import React from 'react'
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
//* Hooks
import { useCard } from './useCard'

export const MlCard = ({
  src,
  supplier = AtCardLabelSupplier.EVOPLAY,
  info,
  name,
  disabled = false,
  className,
  dataTestId,
  ...props
}: MlCardProps) => {
  //* State
  const { setIsHovered, showInfo, setShowInfo, giftIcon, exclamationIcon } = useCard()

  return (
    <>
      <div
        className={`${
          disabled ? 'tw-pointer-events-none' : ''
        } ${CardContainerClasses} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid={dataTestId}
        {...props}
      >
        {!disabled && (
          <>
            <AtCardLabel
              dataTestId={`${dataTestId}-at-card-label`}
              supplier={supplier as AtCardLabelSupplier}
              className='tw-absolute tw-z-50 tw-left-[10px] tw-top-[10px]'
            />
            <AtIcon
              dataTestId={`${dataTestId}-at-icon-exclamation`}
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
            dataTestId={`${dataTestId}-at-icon-gift`}
            type={giftIcon}
            className={`tw-bottom-[6px] ${CardIconsClasses} ${
              showInfo ? 'tw-top-[10px]' : 'tw-bottom-[6px] md:tw-bottom-4'
            }`}
          />
        )}
        <div
          className={`${CardOverlayClasses}
          ${showInfo ? 'tw-opacity-100 !tw-justify-end' : 'tw-opacity-0'}
          ${disabled ? 'tw-opacity-100' : ''}
          `}
        >
          {name && !showInfo && !disabled && (
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
                dataTestId={`${dataTestId}-at-button-play`}
                className='!tw-border-none !tw-px-[18px] !tw-py-2  tw-bg-accent-/60 !tw-rounded-lg'
                label='Jugar Ahora'
                variant={AtButtonVariant.ACCENT}
                labelClassName='tw-text-xs tw-leading-[14px]'
              />
            </>
          )}

          {disabled && (
            <AtButton
              dataTestId={`${dataTestId}-at-button-disabled`}
              disabled={disabled}
              className='!tw-border-none !tw-px-[18px] !tw-py-2 !tw-rounded-lg'
              label='No Disponible'
              labelClassName='tw-text-xs tw-leading-[14px]'
            />
          )}
        </div>
        <Image
          priority
          className='tw-rounded-lg'
          src={src ?? ''}
          sizes='(max-width: 768px) 260w, 130w'
          alt='Card'
          fill
          style={{
            objectFit: 'cover'
          }}
          placeholder='blur'
          blurDataURL='https://cdn.wcbackoffice.com/winchile/providers/habanero/normal/SGBikiniIslandDeluxe.jpeg'
        />
      </div>
    </>
  )
}
