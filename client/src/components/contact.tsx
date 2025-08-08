import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      serviceType: "",
      description: "",
      contactMethod: "",
    },
  });

  const submitConsultationMutation = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest("POST", "/api/consultation-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Request Submitted!",
        description: "Thank you for your interest. We'll contact you within 2 hours to schedule your free consultation.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again or call us directly.",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    setIsSubmitting(true);
    submitConsultationMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral mb-4">Contact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to get started? Contact us for your free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-neutral mb-2">First Name</Label>
                  <Input 
                    {...form.register("firstName")}
                    placeholder="Your first name" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-neutral mb-2">Last Name</Label>
                  <Input 
                    {...form.register("lastName")}
                    placeholder="Your last name" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-neutral mb-2">Email</Label>
                <Input 
                  {...form.register("email")}
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {form.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-neutral mb-2">Phone</Label>
                <Input 
                  {...form.register("phone")}
                  type="tel" 
                  placeholder="(555) 123-4567" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="serviceType" className="block text-sm font-medium text-neutral mb-2">Service</Label>
                <Select onValueChange={(value) => form.setValue("serviceType", value)}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="device-setup">Device Setup</SelectItem>
                    <SelectItem value="networking">Home Networking</SelectItem>
                    <SelectItem value="pc-building">PC Building</SelectItem>
                    <SelectItem value="training">Training & Support</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.serviceType && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="description" className="block text-sm font-medium text-neutral mb-2">Message</Label>
                <Textarea 
                  {...form.register("description")}
                  placeholder="Tell us about your needs..." 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent h-24"
                />
                {form.formState.errors.description && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.description.message}</p>
                )}
              </div>

              <div>
                <Label className="block text-sm font-medium text-neutral mb-2">Contact Method</Label>
                <RadioGroup onValueChange={(value) => form.setValue("contactMethod", value)}>
                  <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone" />
                      <Label htmlFor="phone">Phone</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email">Email</Label>
                    </div>
                  </div>
                </RadioGroup>
                {form.formState.errors.contactMethod && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.contactMethod.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-neutral mb-4">Get in Touch</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-primary"></i>
                  <span>(555) 668-2832</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary"></i>
                  <span>hello@novacaretech.ca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span>Greater Toronto Area</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-neutral mb-2">Free Consultation</h4>
              <p className="text-gray-600 text-sm">
                We offer a free 30-minute consultation to understand your technology needs and provide recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
