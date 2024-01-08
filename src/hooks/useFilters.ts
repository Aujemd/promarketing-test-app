'use client'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { MlCardProps } from '../components/molecules/ml-card/types'
import { SelectState, useFiltersReturnType } from './types'

// React hook for managing filters and data fetching
export const useFilters = (): useFiltersReturnType => {
  // State variables for filter settings
  const [orderAscendent, setOrderAscendent] = useState<boolean>(false)
  const [selectedState, setSelectedState] = useState<SelectState>(SelectState.ALL)
  const [query, setQuery] = useState<string>('')

  // Data fetching using React Query
  const { isPending, error, data } = useQuery({
    queryKey: ['cardData'],
    queryFn: () =>
      fetch(process.env.NEXT_PUBLIC_API_URL || '').then((res) => {

        return res.json()
      })
  })

  // Timeout for handling search debounce
  let filterTimeout: string | number | NodeJS.Timeout | undefined

  // Memoized filtering of items based on filter settings
  const filteredItems = useMemo<MlCardProps[]>(() => {
    if (!data) return []

    let dataToReturn: MlCardProps[] = (data as MlCardProps[])?.sort((a, b) => {
      // Sorting based on 'rtp' attribute
      const aRtp = a.info?.rtp
      const bRtp = b.info?.rtp
      if (aRtp && bRtp) {
        if (orderAscendent) {
          if (aRtp > bRtp) return 1
          else return -1
        }

        if (aRtp < bRtp) return 1
        else return -1
      }

      return 0
    })

    // Filtering based on selected state
    if (selectedState !== SelectState.ALL) {
      switch (selectedState) {
        case SelectState.ENABLED:
          dataToReturn = dataToReturn?.filter((item) => !item.disabled)
          break
        case SelectState.DISABLED:
          dataToReturn = dataToReturn?.filter((item) => item.disabled)
          break
        default:
          break
      }
    }

    // Filtering based on search query
    if (query) {
      dataToReturn = dataToReturn?.filter((item) =>
        item?.name?.toLowerCase().includes(query.toLowerCase())
      )
    }

    return dataToReturn
  }, [orderAscendent, data, selectedState, query])

  // Event handler for handling search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    clearTimeout(filterTimeout)
    // Debouncing the search input to avoid frequent API calls
    filterTimeout = setTimeout(() => {
      setQuery(query)
    }, 500)
  }

  // Return the necessary values and functions for the component
  return {
    isPending,
    error,
    filteredItems,
    orderAscendent,
    setOrderAscendent,
    selectedState,
    setSelectedState,
    handleSearch
  }
}
