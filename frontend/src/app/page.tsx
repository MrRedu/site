import { Section } from '@/components/atoms/section'
import { FeaturedCollectionsGallery } from '@/components/organisms/featured-collections-gallery'

export default function HomePage() {
  return (
    <Section component="section">
      <h2 className="mb-8 text-center text-2xl">Featured Collections</h2>
      <FeaturedCollectionsGallery />
    </Section>
  )
}
