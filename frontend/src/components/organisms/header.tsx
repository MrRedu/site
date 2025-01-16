import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { NAV_ITEMS } from '@/utils/consts'

export const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center gap-y-6 px-2 py-5 md:grid-rows-2 md:px-4 lg:px-6">
      <h1 className="hidden">Site</h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="link"
            className="justify-self-start transition-all duration-200 ease-in-out hover:scale-110 [&_svg]:size-6"
            aria-label="Search"
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <div className="mx-auto w-full max-w-md py-12">
            <SheetHeader>
              <SheetTitle>Search</SheetTitle>
              <SheetDescription>
                Search for products, categories, and more
              </SheetDescription>
              <Input placeholder="Item 1, item 2, item 3" />
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>

      <Image
        src="/logotype.svg"
        alt="Logotype"
        className="h-full w-24 justify-self-center"
        width={150}
        height={300}
      />

      <Button
        size="icon"
        variant="link"
        className="justify-self-end transition-all duration-200 ease-in-out hover:scale-110 [&_svg]:size-6"
        aria-label="Cart"
        asChild
      >
        <Link href="/cart" aria-label="Go to cart">
          <span className="sr-only">Cart</span>
          <ShoppingBagIcon />
        </Link>
      </Button>

      <nav className="col-span-3 hidden md:block">
        <ul className="flex justify-center gap-4 p-2">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <Button asChild variant="link">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
