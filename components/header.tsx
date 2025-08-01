import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-neutral-50 text-gray-900 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
        <span className="text-xl font-bold text-pmgBlue font-serif">PMG Transport</span>
        <span className="sr-only">PMG Transport Services</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 font-sans"
          href="#services"
        >
          Services
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 font-sans" href="#faq">
          FAQ
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 font-sans"
          href="#contact"
        >
          Contact
        </Link>
        <Button asChild className="bg-pmgBlue text-white hover:bg-pmgBlue/90 h-8 px-3 text-sm font-sans">
          <Link href="#contact">Get a Quote</Link>
        </Button>
      </nav>
    </header>
  )
}
