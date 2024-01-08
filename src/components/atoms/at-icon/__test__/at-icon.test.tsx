//* React Utilities
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
//* Component
import { AtIcon } from '../index'
//* Types
import { AtIconProps, IconType } from '../types'

const defaultAtIconProps: AtIconProps = {
  type: IconType.wallet,
  dataTestId: 'test-at-icon',
}

const renderComponent = (props: AtIconProps) => {
  return render(<AtIcon {...props} />)
}

describe('AtIcon Component', () => {
  it('AtIcon render', () => {
    const { getByTestId } = renderComponent(defaultAtIconProps)
    const atIcon = getByTestId(defaultAtIconProps.dataTestId || '')

    expect(atIcon).toBeInTheDocument()
  })

  it('AtIcon render svg', () => {
    const { getByTestId } = renderComponent(defaultAtIconProps)
    const atIcon = getByTestId(defaultAtIconProps.dataTestId || '')

    expect(atIcon).toContainHTML('svg')
  })
})