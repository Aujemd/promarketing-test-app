//* React Utilities
import React from 'react'
//* Test Utilities
import { render, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'

//* Component
import { MlCard } from '../index'

//* Hooks
import { useCard } from '../useCard'

//* Types
import { MlCardProps, useCardReturnType } from '../types'
import { AtCardLabelSupplier } from '../../../atoms/at-card-label/types'

const defaultMlCardProps: MlCardProps = {
  dataTestId: 'test-ml-card',
  disabled: false,
  info: {
    moodBonus: true,
    rtp: '96.00%',
    version: '1.0.0'
  },
  supplier: AtCardLabelSupplier.EVOPLAY,
  src: 'https://cdn.wcbackoffice.com/winchile/providers/habanero/normal/SGBikiniIslandDeluxe.jpeg',
  name: 'Bikini Island Deluxe'
}

const renderComponent = (props: MlCardProps) => {
  return render(<MlCard {...props} />)
}

describe('MlCard Component', () => {
  it('MlCard render', () => {
    const { getByTestId } = renderComponent(defaultMlCardProps)
    const mlCard = getByTestId(defaultMlCardProps.dataTestId || '')

    expect(mlCard).toBeInTheDocument()
  })

  it('MlCard render image', () => {
    const { getByTestId } = renderComponent(defaultMlCardProps)
    const mlCard = getByTestId(defaultMlCardProps.dataTestId || '')

    expect(mlCard).toContainHTML('img')
  })

  it('MlCard render icons', () => {
    const { container } = renderComponent(defaultMlCardProps)

    expect(container.querySelectorAll('svg').length).toBe(2)
  })
})

describe('useCard hook', () => {
  it('should not showInfo', () => {
    const {
      result: {
        current: { showInfo, isHovered }
      }
    } = renderHook(useCard)

    expect(showInfo).toBeFalsy()
    expect(isHovered).toBeFalsy()
  })
})
