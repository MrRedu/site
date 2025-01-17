import axios from 'axios'
import { useEffect, useState } from 'react'
import { ResponseProduct } from '@/types/response.type'
import { Product } from '../types/product.type'

export function useProducts() {
  const URL_ALL_PRODUCTS_WITH_COVER = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*`

  const [products, setProducts] = useState<Product[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>()

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      try {
        const { data } = await axios<ResponseProduct>(
          URL_ALL_PRODUCTS_WITH_COVER
        )
        setProducts(data.data as Product[])
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [URL_ALL_PRODUCTS_WITH_COVER])

  return {
    products,
    isLoading,
    error,
  }
}
