import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["React", "Node.js", "MongoDB"],
      slug: "e-commerce-platform"
    },
    {
      title: "Healthcare App",
      description: "Mobile application for patient management and telemedicine.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["React Native", "Firebase", "WebRTC"],
      slug: "healthcare-app"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics dashboard for financial institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["Vue.js", "D3.js", "Python"],
      slug: "financial-dashboard"
    },
    {
      title: "Smart Home System",
      description: "IoT platform for home automation and energy management.",
      image: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["React", "Node.js", "MQTT"],
      slug: "smart-home-system"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Our <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          Explore our latest projects and see how we've helped businesses transform their digital presence.
        </p>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-up">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/case-study/${project.slug}`}>
                  <Button className="mt-4">View Case Study</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;