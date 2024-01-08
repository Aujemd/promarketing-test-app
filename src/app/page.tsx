'use client'

//* Components
import { MlCard } from '../components/molecules/ml-card'
import { AtIcon } from '../components/atoms/at-icon'
import { IconType } from '../components/atoms/at-icon/types'
import { MlCardProps } from '../components/molecules/ml-card/types'

//* Hooks
import { useFilters } from '../hooks/useFilters'
import { SelectState } from '../hooks/types'

export default function Page() {
  //*State
  const {
    isPending,
    error,
    setOrderAscendent,
    orderAscendent,
    filteredItems,
    selectedState,
    setSelectedState,
    handleSearch
  } = useFilters()

  if (isPending) return 'Loading... ⌛'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <div className='tw-min-h-screen tw-flex tw-flex-col tw-gap-8  tw-items-center'>
        <div className=' tw-w-11/12'>
          <div className='tw-flex tw-gap-4 tw-items-center  tw-my-10'>
            <input
              type='text'
              onChange={handleSearch}
              className='tw-p-5 tw-rounded-md tw-bg-gray-100 tw-border'
            />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value as SelectState)}
              className='tw-p-5 tw-rounded-md tw-bg-gray-100 tw-border '
            >
              <option value={SelectState.ALL}>All</option>
              <option value={SelectState.ENABLED}>Enabled</option>
              <option value={SelectState.DISABLED}>Disabled</option>
            </select>
            Order
            <AtIcon
              onClick={() => setOrderAscendent(!orderAscendent)}
              type={IconType['chevron-down']}
              className={`tw-transition-all ${
                orderAscendent ? 'tw-rotate-180' : ''
              } tw-transition-all tw-duration-300  tw-ease-in-out`}
            />
          </div>

          <div className='tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-2 md:tw-gap-6 '>
            {filteredItems &&
              filteredItems.map((item: MlCardProps) => <MlCard key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </>
  )
}
