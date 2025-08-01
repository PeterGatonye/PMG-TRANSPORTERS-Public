import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">Get in Touch</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
              Have questions or need a custom quote? Contact us today!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold font-serif">Contact Information</h3>
            <div className="space-y-2 font-sans">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-900" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-900" />
                <p>info@pmgtransport.com</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-900" />
                <p>123 Transport Lane, City, State, 12345</p>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=300&width=500"
              width="500"
              height="300"
              alt="Office Location"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif">Send Us a Message</h3>
            <form className="grid gap-4 font-sans">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject of your inquiry" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" className="min-h-[100px]" required />
              </div>
              <Button type="submit" className="w-full bg-pmgBlue text-white hover:bg-pmgBlue/90 font-sans">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
