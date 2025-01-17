import NextImage from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  href: string
  title: string
  src: string
  price: number
}

export const ProductCard = ({ href, title, price, src }: ProductCardProps) => {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col gap-4 overflow-hidden"
      aria-label={`Open ${title} product`}
    >
      <div className="h-[520px] overflow-hidden rounded-md">
        <NextImage
          src={`http://localhost:1337${src}` || '/placeholder.webp'}
          width={400}
          height={600}
          // priority={index < 3}
          // loading={index < 3 ? 'eager' : 'lazy'}
          // quality={100}
          // sizes="(max-width: 400px) 100vw, 400px"
          alt={`Cover to ${title} collection`}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex w-full flex-col items-end gap-2">
        <h3 className="text-md">{title || 'Unknown'}</h3>
        <span>${price} USD</span>
      </div>
    </Link>
  )
}
