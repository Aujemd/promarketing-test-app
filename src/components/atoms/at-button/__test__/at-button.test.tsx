//* React Utilities
import React from 'react'
//* Test Utilities
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
//* Component
import { AtButton } from '../index'
//* Types
import { AtButtonProps, AtButtonType, AtButtonVariant } from '../types'
import { IconType } from '../../at-icon/types'

const defaultAtButtonProps: AtButtonProps = {
  label: 'Click me',
  dataTestId: 'test-button',
  ariaLabel: 'test-button',
  variant: AtButtonVariant.PRIMARY,
  icon: IconType.wallet,
  buttonType: AtButtonType.ICON_LEFT,
  labelClassName: '',
  disabled: false,
  onClick: () => {}
}

const renderComponent = (props: AtButtonProps) => {
  return render(<AtButton {...props} />)
}

describe('AtButton Component', () => {
  it('Button render', () => {
    const { getByText, getByTestId } = renderComponent(defaultAtButtonProps)
    const button = getByTestId(defaultAtButtonProps.dataTestId || '')

    expect(button).toBeInTheDocument()
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('Button click Event', () => {
    const handleClick = jest.fn()

    const { getByTestId } = renderComponent({ ...defaultAtButtonProps, onClick: handleClick })

    const button = getByTestId(defaultAtButtonProps.dataTestId || '')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Button render disabled', () => {
    const { getByTestId } = renderComponent({ ...defaultAtButtonProps, disabled: true })

    const button = getByTestId(defaultAtButtonProps.dataTestId || '')

    expect(button).toBeDisabled()
  })

  it('Button render icon', () => {
    const { getByTestId } = renderComponent({ ...defaultAtButtonProps, disabled: true })

    const icon = getByTestId(`${defaultAtButtonProps.dataTestId}-at-icon` || '')

    expect(icon).toBeInTheDocument()
  })
})
