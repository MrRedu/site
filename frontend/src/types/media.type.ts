export interface Image {
  id: number
  documentId: string
  name: string
  alternativeText: null | string
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface Formats {
  large?: Format
  small: Format
  medium: Format
  thumbnail: Format
}

export interface Format {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  sizeInBytes: number
}
