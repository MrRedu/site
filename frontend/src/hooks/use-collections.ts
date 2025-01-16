import axios from 'axios'
import { useEffect, useState } from 'react'

import { Collection } from '../types/collection.type'
import { ResponseCollection } from '../types/response.type'

// const URL_ALL_COLLECTIONS = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/collections`
// const URL_ALL_COLLECTIONS_WITH_COVER = `process.env.NEXT_PUBLIC_BACKEND_URL/api/collections?populate=*`
// const URL_FEATURED_COLLECTIONS_WITH_COVER = `process.env.NEXT_PUBLIC_BACKEND_URL/api/collections?filter[isFeatured][$eq]=true&populate=*`
// const URL_FEATURED_COLLECTIONS = `process.env.NEXT_PUBLIC_BACKEND_URL/api/collections?filter[isFeatured][$eq]=true`

export function useCollections() {
  const URL_ALL_COLLECTIONS_WITH_COVER = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/collections?populate=*`

  const [collections, setCollections] = useState<Collection[] | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      try {
        const { data } = await axios<ResponseCollection>(
          URL_ALL_COLLECTIONS_WITH_COVER
        )
        setCollections(data.data as Collection[])
      } catch (error) {
        setError(error as unknown)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [URL_ALL_COLLECTIONS_WITH_COVER])

  return {
    collections,
    isLoading,
    error,
  }
}
