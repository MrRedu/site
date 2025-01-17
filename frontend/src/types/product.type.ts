import { Collection } from './collection.type'
import { Image } from './media.type'

export interface Product {
  id: number
  documentId: string
  name: string
  slug: string
  description: string
  price: number
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  images: Image[]
  collection: Omit<Collection, 'cover'>
}
