import { CollectionCard } from '@/components/molecules/collection-card'
import { Gallery } from '@/components/molecules/gallery'
import { COLLECTIONS } from '@/utils/consts'

export const CollectionsGallery = () => {
  return (
    <Gallery>
      {COLLECTIONS.map((category, index) => (
        <CollectionCard
          key={category.id}
          index={index}
          href={category.href}
          label={category.label}
          src={category.src}
        />
      ))}
    </Gallery>
  )
}
