import Link from "next/link"
import { Truck, Package, Home, Box, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  PMG: Your Trusted Partner in Transport
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Specializing in reliable and efficient transport services for goods, furniture, house moving, and
                  more. We move it, you relax.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-white text-gray-900 hover:bg-gray-200">
                  <Link href="#services">Explore Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Comprehensive Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PMG offers a wide range of transport solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center">
                <Truck className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Goods Transport</CardTitle>
                <CardDescription>
                  Reliable and secure transportation of various goods, from small parcels to large cargo.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Package className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Furniture Moving</CardTitle>
                <CardDescription>
                  Careful handling and transport of your valuable furniture, ensuring safe delivery.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Home className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">House Moving</CardTitle>
                <CardDescription>Stress-free residential moving services, from packing to unpacking.</CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Box className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Commercial Relocation</CardTitle>
                <CardDescription>Efficient and organized moving solutions for businesses of all sizes.</CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Truck className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Specialized Transport</CardTitle>
                <CardDescription>
                  Handling unique or oversized items with specialized equipment and expertise.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <CheckCircle className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Custom Solutions</CardTitle>
                <CardDescription>
                  Tailored transport plans to meet your specific requirements and budget.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose PMG?</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At PMG, we are committed to providing exceptional service and peace of mind.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <CheckCircle className="mr-2 inline-block h-4 w-4 text-gray-900" />
                    Experienced and professional team
                  </li>
                  <li>
                    <CheckCircle className="mr-2 inline-block h-4 w-4 text-gray-900" />
                    Reliable and timely deliveries
                  </li>
                  <li>
                    <CheckCircle className="mr-2 inline-block h-4 w-4 text-gray-900" />
                    Competitive pricing
                  </li>
                  <li>
                    <CheckCircle className="mr-2 inline-block h-4 w-4 text-gray-900" />
                    Comprehensive insurance coverage
                  </li>
                  <li>
                    <CheckCircle className="mr-2 inline-block h-4 w-4 text-gray-900" />
                    Customer satisfaction guaranteed
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="Delivery Truck"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <FAQSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-800 text-white">
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} PMG Transport. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
