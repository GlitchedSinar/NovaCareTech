export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real stories from seniors who've transformed their relationship with technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "David was incredibly patient with me. He set up my new tablet and taught me how to video chat with my grandchildren. I never thought I'd be comfortable with technology, but he made it so easy!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-neutral">Margaret Thompson</p>
                <p className="text-sm text-gray-600">Age 72</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "The home theatre setup exceeded our expectations. Now we can easily watch Netflix and listen to our favorite music with crystal clear sound. Worth every penny!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-neutral">Robert & Linda Chen</p>
                <p className="text-sm text-gray-600">Ages 68 & 65</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "My computer was running so slowly, and I was ready to buy a new one. NovaCare Tech upgraded my existing computer for a fraction of the cost. It runs like new!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-neutral">James Morrison</p>
                <p className="text-sm text-gray-600">Age 74</p>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Showcase */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-neutral mb-12">Project Showcase</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-2xl font-semibold text-neutral mb-6">Home Network Transformation</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-red-600 mb-2">Before:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Slow internet in bedroom and basement</li>
                    <li>• Multiple network names causing confusion</li>
                    <li>• Frequent disconnections</li>
                    <li>• Unsecured network vulnerable to hackers</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-accent mb-2">After:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Full coverage throughout the house</li>
                    <li>• Single network name with seamless roaming</li>
                    <li>• Stable, reliable connections</li>
                    <li>• WPA3 security with guest network</li>
                  </ul>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300" 
                   alt="Professional discussing network setup with senior client" 
                   className="rounded-lg mt-6 w-full h-48 object-cover" />
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-2xl font-semibold text-neutral mb-6">Smart Home Entertainment</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-red-600 mb-2">Before:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Multiple remotes causing confusion</li>
                    <li>• Poor TV sound quality</li>
                    <li>• Couldn't access streaming services</li>
                    <li>• Complex cable box interface</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-accent mb-2">After:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Universal remote controls everything</li>
                    <li>• High-quality surround sound system</li>
                    <li>• Easy access to Netflix, Prime, YouTube</li>
                    <li>• Simple, customized home screen</li>
                  </ul>
                </div>
              </div>
              <img src="https://pixabay.com/get/gdbadb3e73fbba0d672ff9e616485e00713ca245bf6ecd4640076dd2b4cd1c9ff72311ce4c7dbd4ed483de71ce83ce44f97266b3e78e6d75194ce52d73e7360f2_1280.jpg" 
                   alt="Clean modern living room with entertainment system setup" 
                   className="rounded-lg mt-6 w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
