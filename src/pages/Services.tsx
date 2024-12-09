import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Cloud, Database, Shield, Gauge, Brain, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const Services = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
    },
    {
      icon: Database,
      title: "Blockchain Solutions",
      description: "Secure and transparent blockchain implementations for modern business.",
    },
    {
      icon: Cpu,
      title: "Smart Contracts",
      description: "Automated, secure, and efficient smart contract development.",
    },
    {
      icon: Cloud,
      title: "Cloud AI Integration",
      description: "Seamless integration of AI services with cloud infrastructure.",
    },
    {
      icon: Shield,
      title: "Secure AI Systems",
      description: "Protected AI implementations with advanced security measures.",
    },
    {
      icon: Gauge,
      title: "AI Performance Optimization",
      description: "Optimize your AI models for maximum efficiency and accuracy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
          Our <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Services</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl animate-fade-up">
          Cutting-edge AI and blockchain solutions to transform your business in the digital age.
        </p>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Button variant="outline" className="group border-primary text-primary hover:bg-primary/10">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and blockchain services can help you achieve your digital goals.
          </p>
          <Button size="lg" className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;