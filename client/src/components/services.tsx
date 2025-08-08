import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-neutral mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple technology solutions for your everyday needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Device Setup */}
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-mobile-alt text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-medium text-neutral mb-4">Device Setup</h3>
            <p className="text-gray-600 mb-6">
              Help choosing and setting up smartphones, tablets, and computers.
            </p>
            <div className="text-primary font-medium text-lg mb-6">From $89</div>
            <Button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
              Learn More
            </Button>
          </div>

          {/* Home Networking */}
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-wifi text-accent text-xl"></i>
            </div>
            <h3 className="text-xl font-medium text-neutral mb-4">Home Networking</h3>
            <p className="text-gray-600 mb-6">
              WiFi setup, security configuration, and network optimization.
            </p>
            <div className="text-primary font-medium text-lg mb-6">From $129</div>
            <Button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
              Learn More
            </Button>
          </div>

          {/* Training & Support */}
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-chalkboard-teacher text-yellow-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-medium text-neutral mb-4">Training & Support</h3>
            <p className="text-gray-600 mb-6">
              One-on-one training sessions and ongoing technical support.
            </p>
            <div className="text-primary font-medium text-lg mb-6">From $79/hr</div>
            <Button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
