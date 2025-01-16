import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

interface CollectionCardProps {
  href: string
  title: string
  src?: string
}

export const CollectionCard = ({ href, title, src }: CollectionCardProps) => {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col gap-4 overflow-hidden"
      aria-label={`Open ${title} collection`}
    >
      <div className="h-[520px] overflow-hidden rounded-md">
        <Image
          src={src || '/placeholder.png'}
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
      <div className="flex w-full items-center gap-2">
        <h3 className="text-lg">{title || 'Unknown'}</h3>
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
