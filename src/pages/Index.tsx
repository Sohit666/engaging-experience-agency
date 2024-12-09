import { ArrowRight, Code, Smartphone, Cloud, Brain, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

const Index = () => {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    implementations: 0,
    solutions: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        projects: 100,
        implementations: 50,
        solutions: 30
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: '2px',
                  height: '2px',
                  backgroundColor: '#9b87f5',
                  boxShadow: '0 0 20px 2px #9b87f5',
                  animation: `pulse ${2 + Math.random() * 3}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
            Empowering Businesses with{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              AI & Blockchain
            </span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up">
            Leveraging cutting-edge technologies to transform your digital presence
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Cutting-Edge Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description:
                  "Smart solutions powered by advanced artificial intelligence and machine learning algorithms.",
              },
              {
                icon: Database,
                title: "Blockchain Solutions",
                description:
                  "Secure and transparent blockchain implementations for modern business needs.",
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                description:
                  "Scalable cloud infrastructure with automated deployment pipelines.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-secondary/50 to-primary/10">
        <div className="container mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: animatedStats.projects, label: "Projects Delivered" },
              { number: animatedStats.implementations, label: "AI Implementations" },
              { number: animatedStats.solutions, label: "Blockchain Solutions" },
            ].map((stat) => (
              <div key={stat.label} className="animate-fade-up">
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}+</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and blockchain solutions can help you achieve your digital goals.
          </p>
          <Button size="lg" className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Floating Tech Icons */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 5}s infinite`,
              opacity: 0.1,
            }}
          >
            {i % 2 === 0 ? (
              <Brain className="w-8 h-8 text-primary" />
            ) : (
              <Database className="w-8 h-8 text-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
