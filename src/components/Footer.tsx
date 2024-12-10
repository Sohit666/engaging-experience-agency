import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechSolutions</h3>
            <p className="text-gray-300">
              Empowering businesses with innovative technology solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-primary">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary">FAQ</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-300 hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>contact@techsolutions.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street, Silicon Valley</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;