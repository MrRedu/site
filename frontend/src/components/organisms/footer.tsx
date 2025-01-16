import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="min-h-[400px] bg-vampire px-2 py-5 md:grid-rows-2 md:px-4 lg:px-6">
      <Image
        src="/logotype-negative.svg"
        alt="Negative logotype"
        className="h-full w-24 justify-self-center"
        width={150}
        height={300}
      />
    </footer>
  )
}
