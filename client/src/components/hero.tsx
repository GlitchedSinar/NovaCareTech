import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h1 className="text-6xl font-light text-neutral leading-tight mb-8">
            Technology Made
            <span className="block text-primary font-normal">Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional technology consultation and setup services for seniors.
          </p>
          <div className="flex justify-center space-x-6">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-8 py-4 rounded-md hover:bg-blue-600 transition-colors text-lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:bg-gray-50 transition-colors text-lg"
              asChild
            >
              <a href="tel:+1-555-668-2832">
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
