import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = {
  "e-commerce-platform": {
    title: "E-Commerce Platform",
    client: "RetailTech Solutions",
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    challenge: "The client needed a scalable e-commerce solution capable of handling high traffic volumes and managing real-time inventory across multiple warehouses.",
    solution: "We developed a custom e-commerce platform using React and Node.js, implementing real-time inventory management, advanced search capabilities, and integrated payment processing.",
    results: [
      "300% increase in online sales",
      "50% reduction in inventory management time",
      "99.9% uptime during peak shopping seasons",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    testimonial: {
      text: "The team delivered beyond our expectations, creating a platform that not only met our immediate needs but positioned us for future growth.",
      author: "Sarah Johnson",
      role: "CTO, RetailTech Solutions"
    }
  },
  "healthcare-app": {
    title: "Healthcare App",
    client: "MedConnect",
    duration: "8 months",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    challenge: "Creating a HIPAA-compliant telemedicine platform that could handle secure video consultations and medical record management.",
    solution: "We built a comprehensive healthcare platform using React Native and Firebase, implementing end-to-end encryption and secure data storage.",
    results: [
      "10,000+ patient consultations in first month",
      "95% patient satisfaction rate",
      "40% reduction in appointment no-shows",
    ],
    technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "MongoDB"],
    testimonial: {
      text: "The app has revolutionized how we deliver healthcare services to our patients. The attention to security and user experience was exceptional.",
      author: "Dr. Michael Chen",
      role: "Medical Director, MedConnect"
    }
  },
  "financial-dashboard": {
    title: "Financial Dashboard",
    client: "FinTech Analytics",
    duration: "4 months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    challenge: "Building a real-time financial analytics dashboard that could process and visualize large volumes of market data.",
    solution: "We created a high-performance dashboard using Vue.js and D3.js, with real-time data processing and advanced visualization capabilities.",
    results: [
      "Real-time processing of 1M+ data points",
      "60% faster decision making",
      "85% user engagement increase",
    ],
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Redis"],
    testimonial: {
      text: "The dashboard has become an indispensable tool for our analysts. The real-time capabilities and intuitive interface have exceeded our expectations.",
      author: "Alex Thompson",
      role: "Head of Analytics, FinTech Analytics"
    }
  },
  "smart-home-system": {
    title: "Smart Home System",
    client: "HomeAutomation Pro",
    duration: "5 months",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    challenge: "Developing an IoT platform that could integrate with multiple smart home devices and provide a unified control interface.",
    solution: "We developed a comprehensive IoT platform using React and Node.js, implementing MQTT protocol for device communication and real-time control.",
    results: [
      "Support for 100+ device types",
      "30% energy savings for users",
      "15-minute average setup time",
    ],
    technologies: ["React", "Node.js", "MQTT", "MongoDB", "AWS IoT"],
    testimonial: {
      text: "The platform has transformed how our customers interact with their smart home devices. The integration capabilities are outstanding.",
      author: "Lisa Martinez",
      role: "Product Manager, HomeAutomation Pro"
    }
  }
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies[slug as keyof typeof caseStudies];

  if (!study) {
    return <div className="min-h-screen flex items-center justify-center text-white">Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95 text-white pb-10">
      <div className="container mx-auto pt-20 px-4">
        <Link to="/portfolio">
          <Button
            variant="outline"
             className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 animate-fade-up">
          <div>
            <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
            <div className="text-gray-300 mb-6">
              <p>
                <strong>Client:</strong> {study.client}
              </p>
              <p>
                <strong>Duration:</strong> {study.duration}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Challenge</h2>
              <p className="text-gray-300">{study.challenge}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Solution</h2>
              <p className="text-gray-300">{study.solution}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Results</h2>
              <ul className="list-disc list-inside text-gray-300">
                {study.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg"
            />

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-3">Client Testimonial</h2>
              <blockquote className="text-gray-300 italic mb-4">
                "{study.testimonial.text}"
              </blockquote>
              <p className="text-primary font-semibold">
                {study.testimonial.author}
              </p>
              <p className="text-gray-300">{study.testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;