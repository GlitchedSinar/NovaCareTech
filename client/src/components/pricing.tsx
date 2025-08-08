import { Button } from "@/components/ui/button";

export default function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral mb-4">Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-neutral mb-2">Basic</h3>
              <div className="text-3xl font-light text-primary mb-4">$89</div>
            </div>
            
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>1-hour consultation</li>
              <li>Device setup</li>
              <li>Basic training</li>
            </ul>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Button>
          </div>

          {/* Standard */}
          <div className="bg-primary text-white p-8 rounded-lg relative">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium mb-2">Standard</h3>
              <div className="text-3xl font-light mb-4">$199</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li>2-3 hour setup</li>
              <li>Multiple devices</li>
              <li>Network optimization</li>
              <li>30 days support</li>
            </ul>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-white text-primary py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Most Popular
            </Button>
          </div>

          {/* Premium */}
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-neutral mb-2">Premium</h3>
              <div className="text-3xl font-light text-primary mb-4">$399</div>
            </div>
            
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>Full-day consultation</li>
              <li>Complete setup</li>
              <li>Home integration</li>
              <li>3 months support</li>
            </ul>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Get Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
