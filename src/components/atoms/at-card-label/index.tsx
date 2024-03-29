//* React Utilities
import React from 'react'
//* Next Utilities
import Image from 'next/image'
//* Types
import { AtCardLabelProps, AtCardLabelSupplier } from './types'
//* Utilities
import { getSupplierImg } from './utils'

export const AtCardLabel = ({
  supplier = AtCardLabelSupplier.EVOPLAY,
  containerClassName,
  className,
  dataTestId
}: AtCardLabelProps) => {
  const { md, sm } = getSupplierImg(supplier)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <div className={`${containerClassName}`} data-testid={dataTestId}>
      {md?.src && (
        <Image
          className={`${className} tw-hidden md:tw-inline-block tw-rounded-md  tw-w-[75px] tw-h-5`}
          alt='Supplier md'
          src={md?.src}
          width={75}
          height={20}
        />
      )}
      {sm?.src && (
        <Image
          className={`${className} md:tw-hidden tw-rounded-md  tw-w-5 tw-h-5`}
          alt='Supplier sm'
          src={sm?.src}
          width={20}
          height={20}
        />
      )}
    </div>
  )
}
