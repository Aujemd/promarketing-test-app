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
  className
}: AtCardLabelProps) => {
  const {  md, sm } = getSupplierImg(supplier)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <div className={`${containerClassName}`}>
      {md?.src && (
        <Image
          className={`${className} tw-hidden md:tw-inline-block tw-rounded-md`}
          alt='Supplier md'
          src={md?.src}
          width={75}
          height={20}
        />
      )}
      {sm?.src && (
        <Image
          className={`${className} md:tw-hidden tw-rounded-md`}
          alt='Supplier sm'
          src={sm?.src}
          width={20}
          height={20}
        />
      )}
    </div>
  )
}
