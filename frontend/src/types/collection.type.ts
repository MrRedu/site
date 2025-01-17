import { Image } from "./media.type"

export interface Collection {
  id: number
  documentId: string
  name: string
  slug: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  isFeatured: boolean
  cover: Image
}
