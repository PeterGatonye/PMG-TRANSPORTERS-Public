import Link from "next/link"
import { Truck, Package, Home, Box, CheckCircle, Phone, Mail } from "lucide-react"

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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-neutral-50 text-gray-900">
          <div className="container px-4 md:px-6 flex flex-col items-center space-y-8 text-center">
            <div className="space-y-2">
              <p className="text-lg font-semibold tracking-wide uppercase font-sans">FAST & RELIABLE</p>
              <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none text-pmgBlue font-serif">
                PICKUP TRANSPORT
              </h1>
              <p className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl font-sans">PMG TRANSPORTERS</p>
            </div>
            <img
              src="/images/pmg-transport-pickup.png"
              width="800"
              height="450"
              alt="Blue Pickup Truck"
              className="mx-auto object-cover"
            />
            <div className="space-y-4 text-left max-w-md w-full">
              <ul className="list-disc list-inside text-lg space-y-2 font-sans">
                <li>House Moving</li>
                <li>Deliveries</li>
                <li>Furniture Moving</li>
                <li>Market Goods Transport</li>
                <li>& more</li>
              </ul>
              <div className="flex flex-col items-start space-y-2 text-lg font-medium font-sans">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-900" />
                  <span>0768067480</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-900" />
                  <span>petegatonye@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="space-x-4 pt-8">
              <Button asChild className="bg-pmgBlue text-white hover:bg-pmgBlue/90 font-sans">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-100 bg-transparent font-sans"
              >
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">
                  Our Comprehensive Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
                  PMG offers a wide range of transport solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center">
                <Truck className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 font-serif">Goods Transport</CardTitle>
                <CardDescription className="font-sans">
                  Reliable and secure transportation of various goods, from small parcels to large cargo.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Package className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 font-serif">Furniture Moving</CardTitle>
                <CardDescription className="font-sans">
                  Careful handling and transport of your valuable furniture, ensuring safe delivery.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Home className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 font-serif">House Moving</CardTitle>
                <CardDescription className="font-sans">
                  Stress-free residential moving services, from packing to unpacking.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Box className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 font-serif">Commercial Relocation</CardTitle>
                <CardDescription className="font-sans">
                  Efficient and organized moving solutions for businesses of all sizes.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Truck className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 font-serif">Specialized Transport</CardTitle>
                <CardDescription className="font-sans">
                  Handling unique or oversized items with specialized equipment and expertise.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <CheckCircle className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 font-serif">Custom Solutions</CardTitle>
                <CardDescription className="font-sans">
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">Why Choose PMG?</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
                    At PMG, we are committed to providing exceptional service and peace of mind.
                  </p>
                </div>
                <ul className="grid gap-2 py-4 font-sans">
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white font-sans">
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
