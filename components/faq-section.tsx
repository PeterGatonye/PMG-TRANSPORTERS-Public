import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our transport services.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of goods do you transport?</AccordionTrigger>
              <AccordionContent>
                We transport a wide variety of goods, including general cargo, furniture, appliances, and personal
                belongings for house moves. We also offer specialized transport for unique or oversized items.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer packing services for house moves?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer comprehensive packing services as part of our house moving solutions. Our team can
                professionally pack your belongings to ensure their safety during transit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I get a quote for your services?</AccordionTrigger>
              <AccordionContent>
                You can get a free quote by contacting us directly via phone or email, or by filling out the contact
                form on our website. Please provide details about your transport needs for an accurate estimate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Are my goods insured during transport?</AccordionTrigger>
              <AccordionContent>
                Yes, all goods transported by PMG are covered by comprehensive insurance to provide you with peace of
                mind. We prioritize the safety and security of your belongings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What areas do you serve?</AccordionTrigger>
              <AccordionContent>
                PMG Transport provides services across [mention your service area, e.g., the entire region, specific
                states, etc.]. Please contact us to confirm if we cover your specific location.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
