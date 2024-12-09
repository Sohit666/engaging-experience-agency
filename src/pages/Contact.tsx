import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          Have a project in mind? Let's discuss how we can help you achieve your goals.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Our Office</h3>
              <p className="text-gray-600">
                123 Tech Street<br />
                Silicon Valley, CA 94025<br />
                United States
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Contact Info</h3>
              <p className="text-gray-600">
                Phone: +1 (555) 123-4567<br />
                Email: info@techsolutions.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;