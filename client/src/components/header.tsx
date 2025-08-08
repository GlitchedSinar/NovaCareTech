import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <i className="fas fa-laptop text-white text-sm"></i>
            </div>
            <h1 className="text-xl font-medium text-neutral">NovaCare Tech</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-primary transition-colors">Contact</button>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
