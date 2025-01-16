import { Collection } from './collection.type'
import { Product } from './product.type'

export interface ResponseCollection {
  data: Collection[]
  meta: Meta
}

export interface ResponseProduct {
  data: Product[]
  meta: Meta
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
