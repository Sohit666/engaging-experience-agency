
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
      content: "Working with TechSolutions has been transformative for our business. Their expertise in custom software development helped us streamline our operations and increase efficiency by 40%.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      content: "The team's attention to detail and technical expertise is outstanding. They delivered our mobile app ahead of schedule and exceeded our expectations in terms of quality and user experience.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Global Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      content: "TechSolutions' cloud expertise helped us modernize our infrastructure and reduce costs by 30%. Their team is professional, responsive, and truly cares about their clients' success.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
    
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Client <span className="text-primary">Testimonials</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-secondary">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;