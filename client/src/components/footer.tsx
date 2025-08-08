export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-laptop text-white text-sm"></i>
              </div>
              <h3 className="text-lg font-medium text-neutral">NovaCare Tech</h3>
            </div>
            <p className="text-gray-600">
              Technology solutions for seniors.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-neutral mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary text-sm"></i>
                <span>(555) 668-2832</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary text-sm"></i>
                <span>hello@novacaretech.ca</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-neutral mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Device Setup</li>
              <li>Home Networking</li>
              <li>Training & Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">© 2024 NovaCare Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
