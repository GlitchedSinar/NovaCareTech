import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Common questions from seniors about our technology services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl p-8 shadow-sm">
              <AccordionTrigger className="text-xl font-semibold text-neutral">
                Do I need to buy new equipment?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                Not necessarily. We always assess your current equipment first and will only recommend new purchases if they're truly needed. 
                Often, we can optimize what you already have or suggest cost-effective upgrades that provide significant improvements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl p-8 shadow-sm">
              <AccordionTrigger className="text-xl font-semibold text-neutral">
                How patient are you with seniors who aren't tech-savvy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                Extremely patient! Our team specializes in working with seniors and understands that everyone learns at their own pace. 
                We never rush, use simple language, and repeat explanations as many times as needed. Your comfort and understanding are our priorities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl p-8 shadow-sm">
              <AccordionTrigger className="text-xl font-semibold text-neutral">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                We primarily serve the Greater Toronto Area (GTA) and surrounding regions. For locations outside our regular service area, 
                we may charge a small travel fee. Call us to confirm service availability in your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl p-8 shadow-sm">
              <AccordionTrigger className="text-xl font-semibold text-neutral">
                What if something breaks after you leave?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                All our work comes with a 30-day satisfaction guarantee. If something isn't working properly due to our configuration, 
                we'll return to fix it at no additional charge. We also provide ongoing support packages for continued peace of mind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-xl p-8 shadow-sm">
              <AccordionTrigger className="text-xl font-semibold text-neutral">
                Can you help with my smartphone and tablet together?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                Absolutely! We often work with multiple devices in a single session, ensuring they work seamlessly together. 
                We can sync your contacts, photos, and apps across devices, and teach you how to use them effectively.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-xl p-8 shadow-sm">
              <AccordionTrigger className="text-xl font-semibold text-neutral">
                Do you provide written instructions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                Yes! We provide clear, easy-to-follow written guides customized for your specific setup. 
                These include step-by-step instructions with screenshots, so you can reference them anytime you need a reminder.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
