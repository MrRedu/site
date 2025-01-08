import { CATEGORIES } from '@/utils/consts'
import { CollectionCard } from '../molecules/collection-card'
import { Gallery } from '../molecules/gallery'

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
