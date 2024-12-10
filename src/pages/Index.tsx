import { ArrowRight, Code, Smartphone, Cloud, Brain, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

      {/* About Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <p className="text-gray-300 mb-6">
                We're a team of passionate developers, designers, and innovators dedicated to transforming businesses through technology. With years of experience in AI and blockchain solutions, we help companies stay ahead in the digital age.
              </p>
              <Button className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">200+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">50+</h3>
                <p className="text-gray-300">Team Members</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">15+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">98%</h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO, TechCorp",
                content: "Working with TechSolutions has been transformative for our business. Their expertise in AI helped us streamline operations.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Sarah Johnson",
                role: "CTO, Innovation Labs",
                content: "The team's attention to detail and technical expertise is outstanding. They delivered our blockchain solution ahead of schedule.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                content: "Their AI expertise helped us modernize our infrastructure and reduce costs by 30%. Highly recommended!",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What services do you offer?",
                answer: "We offer comprehensive software development services including AI solutions, blockchain development, and digital transformation consulting.",
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity. A typical project can take 4-12 weeks, but we'll provide a detailed timeline during consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various support and maintenance packages to ensure your software continues to perform optimally after launch.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg mb-4 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* Newsletter Subscription Section */}
       <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest insights, updates on new technologies, and exclusive offers delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-3 rounded-md text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
            <Button className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
              Subscribe
            </Button>
          </form>
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
