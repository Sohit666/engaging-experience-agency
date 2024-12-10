import { useParams } from "react-router-dom";

// Sample service details data based on the slug
const serviceDetails = {
  "custom-web-development": {
    title: "Custom Web Development",
    description: "Scalable and responsive web applications built with modern technologies like React, Node.js, and more.",
    content: "Our team specializes in creating fully custom, high-performance web applications that grow with your business. We use cutting-edge technologies to build apps that are fast, responsive, and scalable. Whether you're building an e-commerce platform or a SaaS solution, we have the expertise to bring your ideas to life."
  },
  "cloud-integration": {
    title: "Cloud Integration",
    description: "Seamless cloud infrastructure implementation and management using top cloud providers like AWS, Google Cloud, and Azure.",
    content: "We help businesses integrate their systems with the cloud, enabling better scalability, security, and performance. Our cloud services ensure that your data is securely stored and accessible from anywhere, while optimizing costs and improving overall infrastructure."
  },
  "cybersecurity-solutions": {
    title: "Cybersecurity Solutions",
    description: "Robust security measures to protect your digital assets from evolving cyber threats.",
    content: "Cybersecurity is crucial for protecting your company's data and reputation. We provide comprehensive solutions to safeguard your business, including threat detection, risk assessment, encryption, and compliance. Our team ensures your systems are secure from potential breaches."
  },
  "performance-optimization": {
    title: "Performance Optimization",
    description: "Speed optimization and codebase improvements for maximum efficiency.",
    content: "Improve the performance of your web and mobile applications with our optimization services. From faster load times to more efficient code, we enhance your system to ensure it runs smoothly and meets user expectations."
  },
  "native-app-development": {
    title: "Native App Development",
    description: "High-performance native mobile apps for iOS and Android platforms.",
    content: "We create native mobile applications tailored specifically for iOS and Android, offering superior performance, a seamless user experience, and full integration with the underlying OS. Our native apps ensure that users have the best possible experience on their devices."
  },
  "cross-platform-solutions": {
    title: "Cross-Platform Solutions",
    description: "Efficient cross-platform apps that work seamlessly on iOS, Android, and the web.",
    content: "Our cross-platform solutions ensure that you can reach a broader audience with apps that work across multiple platforms. We use modern frameworks like React Native and Flutter to create apps that look and feel great on every device, without compromising on performance."
  }
};

const ServiceDetail = () => {
  const { slug } = useParams(); // Capture the slug from the URL

  const service = serviceDetails[slug]; // Retrieve service details using the slug

  // If no service matches the slug, return a "Service not found" message
  if (!service) {
    return (
      <div className="min-h-screen bg-secondary text-white">
        <div className="container mx-auto pt-32 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Service Not Found</h1>
          <p className="text-xl">Sorry, we couldn't find the service you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary text-white">
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
        <p className="text-xl mb-4">{service.description}</p>
        <div className="text-lg">{service.content}</div>
      </div>
    </div>
  );
};

export default ServiceDetail;
