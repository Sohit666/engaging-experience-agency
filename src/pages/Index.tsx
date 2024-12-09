import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
            Empowering Businesses with{" "}
            <span className="text-primary">Cutting-Edge</span> Software Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
            We transform your ideas into powerful digital solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up">
            <Button size="lg" className="group">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Software Development",
                description:
                  "Tailored solutions that perfectly match your business needs and goals.",
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description:
                  "Native and cross-platform apps that deliver exceptional user experiences.",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description:
                  "Scalable and secure cloud infrastructure for your growing business.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Button size="lg" className="group">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;