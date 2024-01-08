//* React Utilities
import React from 'react'
//* Test Utilities
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
//* Component
import { AtCardLabel } from '../index'
//* Types
import { AtCardLabelProps, AtCardLabelSupplier } from '../types'

const defaultAtCardLabelProps: AtCardLabelProps = {
  dataTestId: 'test-atcard-label',
  supplier: AtCardLabelSupplier.EVOPLAY
}

const renderComponent = (props: AtCardLabelProps) => {
  return render(<AtCardLabel {...props} />)
}

describe('AtCardLabel Component', () => {
  it('AtCardLabel render', () => {
    const { getByTestId } = renderComponent(defaultAtCardLabelProps)
    const atCardLabel = getByTestId(defaultAtCardLabelProps.dataTestId || '')

    expect(atCardLabel).toBeInTheDocument()
  })

  it('AtCardLabel render image', () => {
    const { getByTestId } = renderComponent(defaultAtCardLabelProps)
    const atCardLabel = getByTestId(defaultAtCardLabelProps.dataTestId || '')

    expect(atCardLabel).toContainHTML('img')
  })
})
