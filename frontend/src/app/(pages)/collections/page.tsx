import { Section } from '@/components/atoms/section'
import { CollectionsGallery } from '@/components/organisms/collections-gallery'
export default function CollectionsPage() {
  return (
    <Section component="section">
      <h2 className="mb-8 text-center text-2xl">Collections</h2>
      <CollectionsGallery />
    </Section>
  )
}
