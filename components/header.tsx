import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
        <span className="text-xl font-bold">PMG Transport</span>
        <span className="sr-only">PMG Transport Services</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
          Services
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
          FAQ
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          Contact
        </Link>
        <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 h-8 px-3 text-sm">
          <Link href="#contact">Get a Quote</Link>
        </Button>
      </nav>
    </header>
  )
}
