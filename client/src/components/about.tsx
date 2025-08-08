export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral mb-4">About</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional technology solutions designed for seniors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-certificate text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-medium text-neutral mb-1">Certified Professionals</h3>
                <p className="text-gray-600">Licensed and insured technicians with years of experience.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-users text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-medium text-neutral mb-1">Senior-Focused</h3>
                <p className="text-gray-600">Patient approach designed specifically for older adults.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-handshake text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-medium text-neutral mb-1">Satisfaction Guarantee</h3>
                <p className="text-gray-600">30-day money-back guarantee on all services.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <blockquote className="text-gray-700 text-lg italic mb-4">
              "Technology should enhance your life, not complicate it."
            </blockquote>
            <p className="text-gray-600">— Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
