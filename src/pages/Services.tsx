import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Brain, Code, Cloud, Database, Shield, Gauge } from "lucide-react";
import { useEffect, useState } from "react";

const Services = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const services = [
    {
      category: "Web Applications",
      items: [
        {
          icon: Code,
          title: "Custom Web Development",
          description: "Scalable and responsive web applications built with modern technologies.",
        },
        {
          icon: Cloud,
          title: "Cloud Integration",
          description: "Seamless cloud infrastructure implementation and management.",
        },
      ]
    },
    {
      category: "Mobile Applications",
      items: [
        {
          icon: Smartphone,
          title: "Native App Development",
          description: "High-performance native mobile apps for iOS and Android.",
        },
        {
          icon: Globe,
          title: "Cross-Platform Solutions",
          description: "Efficient cross-platform apps that work on all devices.",
        },
      ]
    },
    {
      category: "Gen AI Applications",
      items: [
        {
          icon: Brain,
          title: "AI Development",
          description: "Custom AI solutions and machine learning models.",
        },
        {
          icon: Database,
          title: "Large Language Models",
          description: "Implementation of cutting-edge LLMs for your business.",
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
          Our <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Services</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl animate-fade-up">
          Cutting-edge solutions to transform your business in the digital age.
        </p>

        {services.map((category, idx) => (
          <section key={category.category} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((service, index) => (
                <div
                  key={service.title}
                  className={`p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(idx * 2 + index) * 100}ms` }}
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
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
