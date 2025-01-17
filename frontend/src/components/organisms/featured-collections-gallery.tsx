'use client'
import { SkeletonScheme } from '@/components/atoms/skeleton-scheme'
import { CollectionCard } from '@/components/molecules/collection-card'
import { Gallery } from '@/components/molecules/gallery'
import { Collection } from '@/types/collection.type'
import { useFeaturedCollections } from '@/hooks/use-collections'

export const FeaturedCollectionsGallery = () => {
  const { collections, isLoading, error } = useFeaturedCollections()

  return (
    <>
      {isLoading && <SkeletonScheme count={9} />}
      {collections && (
        <Gallery>
          {collections.map((collection: Collection) => (
            <CollectionCard
              key={collection.id}
              href={`/collections/${collection.slug}`}
              title={collection.name}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${collection.cover.url}`}
            />
          ))}
        </Gallery>
      )}
    </>
  )
}
