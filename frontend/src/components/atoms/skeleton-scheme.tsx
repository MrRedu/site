import { Gallery } from '@/components/molecules/gallery'

import { SkeletonCard } from './skeleton-card'

export const SkeletonScheme = ({ count = 3 }: { count?: number }) => {
  return (
    <Gallery>
      {Array.from({ length: count }, (_, index: number) => (
        <SkeletonCard key={index} />
      ))}
    </Gallery>
  )
}
