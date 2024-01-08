//* React Utilities
import { Dispatch, SetStateAction } from 'react'
//* Types
import { MlCardProps } from '../components/molecules/ml-card/types'

export enum SelectState {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  ALL = 'all'
}

export type useFiltersReturnType = {
  isPending: boolean
  error: Error | null
  filteredItems: MlCardProps[]
  orderAscendent: boolean
  setOrderAscendent: Dispatch<SetStateAction<boolean>>
  selectedState: SelectState
  setSelectedState: Dispatch<SetStateAction<SelectState>>
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
