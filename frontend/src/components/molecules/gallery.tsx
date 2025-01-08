import { AnimatedGroup } from '@/components/ui/animated-group'

interface GalleryProps {
  children: React.ReactNode
}

export const Gallery = ({ children }: GalleryProps) => {
  return (
    <AnimatedGroup
      className="grid h-auto w-full grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
      preset="custom"
    >
      {children}
    </AnimatedGroup>
  )
}
