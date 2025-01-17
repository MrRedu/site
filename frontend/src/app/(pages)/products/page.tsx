import { ProductsGallery } from '@/components/organisms/products-gallery'
import { Section } from '@/components/atoms/section'

export default function ProductsPage() {
  return (
    <Section component="section">
      <h2 className="mb-8 text-center text-2xl">All Products</h2>
      <ProductsGallery />
    </Section>
  )
}
