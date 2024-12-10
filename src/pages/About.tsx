
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [stats, setStats] = useState({
    projects: 0,
    team: 0,
    experience: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        projects: 200,
        team: 50,
        experience: 15,
        satisfaction: 98
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95">
     
      
      {/* Hero Section */}
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
          About <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">TechSolutions</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl animate-fade-up">
          We're a team of passionate developers, designers, and innovators dedicated to transforming businesses through technology.
        </p>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with innovative software solutions that drive growth, efficiency, and success in the digital age.
              </p>
              <Button className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{stats.projects}+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{stats.team}+</h3>
                <p className="text-gray-300">Team Members</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{stats.experience}+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{stats.satisfaction}%</h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-4 mx-auto w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse opacity-25"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;