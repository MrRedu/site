import { CollectionCard } from '@/components/molecules/collection-card'
import { Gallery } from '@/components/molecules/gallery'
import { CATEGORIES } from '@/utils/consts'

export const CategoriesGallery = () => {
  return (
    <Gallery>
      {CATEGORIES.map((category, index) => (
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
