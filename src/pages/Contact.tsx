import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          Get in touch with our team for any inquiries or support.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;