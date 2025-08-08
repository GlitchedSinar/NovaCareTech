import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/schema";

export default function SimplifiedHome() {
  const [formData, setFormData] = useState<InsertConsultationRequest>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    serviceType: "",
    description: "",
    contactMethod: "phone"
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitMutation = useMutation({
    mutationFn: (data: InsertConsultationRequest) => 
      apiRequest("/api/consultation-requests", "POST", data),
    onSuccess: () => {
      toast({ title: "Request submitted successfully!" });
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        serviceType: "",
        description: "",
        contactMethod: "phone"
      });
      queryClient.invalidateQueries({ queryKey: ["/api/consultation-requests"] });
    },
    onError: () => {
      toast({ title: "Error submitting request", variant: "destructive" });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = insertConsultationRequestSchema.parse(formData);
      submitMutation.mutate(validatedData);
    } catch (error) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-primary">NovaCare Tech</div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-primary transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-primary transition-colors">Contact</button>
            </nav>
            <a href="tel:+1-555-668-2832" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
                <a href="tel:+1-555-668-2832">Call Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* About Section */}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral mb-4">Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium text-neutral mb-2">Basic</h3>
                <div className="text-4xl font-light text-primary mb-2">$89</div>
                <p className="text-gray-600">One-time setup</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Device setup and configuration
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Basic training session
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  30-day support
                </li>
              </ul>
              <Button className="w-full bg-primary text-white py-3 rounded-md hover:bg-blue-600 transition-colors">
                Get Started
              </Button>
            </div>

            {/* Standard */}
            <div className="bg-white p-8 rounded-lg border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium text-neutral mb-2">Standard</h3>
                <div className="text-4xl font-light text-primary mb-2">$149</div>
                <p className="text-gray-600">Complete setup</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Everything in Basic
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Home network setup
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Security configuration
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  60-day support
                </li>
              </ul>
              <Button className="w-full bg-primary text-white py-3 rounded-md hover:bg-blue-600 transition-colors">
                Get Started
              </Button>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium text-neutral mb-2">Premium</h3>
                <div className="text-4xl font-light text-primary mb-2">$229</div>
                <p className="text-gray-600">Complete solution</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Everything in Standard
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Multiple device setup
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  Extended training
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-check text-accent w-5 mr-3"></i>
                  90-day support
                </li>
              </ul>
              <Button className="w-full bg-primary text-white py-3 rounded-md hover:bg-blue-600 transition-colors">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral mb-4">Contact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to get started? Contact us for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h3 className="font-medium text-neutral">Phone</h3>
                  <p className="text-gray-600">(555) 668-2832</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h3 className="font-medium text-neutral">Email</h3>
                  <p className="text-gray-600">hello@novacaretech.ca</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h3 className="font-medium text-neutral">Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="device-setup">Device Setup</SelectItem>
                      <SelectItem value="home-networking">Home Networking</SelectItem>
                      <SelectItem value="training-support">Training & Support</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">How can we help?</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us about your technology needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">NovaCare Tech</h3>
              <p className="text-gray-300">
                Professional technology consultation services for seniors and families.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: (555) 668-2832</p>
                <p>Email: hello@novacaretech.ca</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Device Setup</li>
                <li>Home Networking</li>
                <li>Training & Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NovaCare Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}