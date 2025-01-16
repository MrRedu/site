import { Section } from '@/components/atoms/section'

export default function CollectionPage({ params }: { params: { id: string } }) {
  return (
    <Section component="section">
      <h2 className="mb-8 text-center text-2xl">Collection {params.id}</h2>
    </Section>
  )
}
