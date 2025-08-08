export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral mb-6">Our Simple 4-Step Process</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We've designed our consultation process to be stress-free and transparent, so you know exactly what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral mb-4">Free Consultation</h3>
            <p className="text-gray-600 leading-relaxed">
              We discuss your needs, assess your current setup, and provide honest recommendations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral mb-4">Custom Plan</h3>
            <p className="text-gray-600 leading-relaxed">
              We create a personalized solution plan with clear pricing and timeline.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral mb-4">Implementation</h3>
            <p className="text-gray-600 leading-relaxed">
              We handle all the technical work while keeping you informed every step of the way.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">4</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral mb-4">Training & Support</h3>
            <p className="text-gray-600 leading-relaxed">
              We teach you how to use your new technology and provide ongoing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
