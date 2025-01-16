'use client'
import { SkeletonScheme } from '@/components/atoms/skeleton-scheme'
import { Gallery } from '@/components/molecules/gallery'
import { useProducts } from '@/hooks/use-products'
import { Product } from '@/types/product.type'
import { ProductCard } from '@/components/molecules/product-card'

export const ProductsGallery = () => {
  const { products, isLoading, error } = useProducts()

  return (
    <>
      {isLoading && <SkeletonScheme count={9} />}
      {products && (
        <Gallery>
          {products.map((product: Product) => {
            return (
              <ProductCard
                key={product.id}
                href={`/products/${product.slug}`}
                title={product.name}
                src={product.images[0].url}
                price={product.price}
              />
            )
          })}
        </Gallery>
      )}
    </>
  )
}
