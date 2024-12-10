
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShoppingBag, Heart, Landmark, Plane, Lightbulb } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Enterprise",
      icon: Building2,
      description: "Digital transformation solutions for large organizations.",
    },
    {
      title: "E-Commerce",
      icon: ShoppingBag,
      description: "Online retail platforms and marketplace solutions.",
    },
    {
      title: "Healthcare",
      icon: Heart,
      description: "Medical software and patient management systems.",
    },
    {
      title: "Finance",
      icon: Landmark,
      description: "FinTech solutions and banking software.",
    },
    {
      title: "Travel",
      icon: Plane,
      description: "Booking systems and travel management platforms.",
    },
    {
      title: "StartUps",
      icon: Lightbulb,
      description: "Innovative solutions for emerging businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
   
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Industries We <span className="text-primary">Serve</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          We deliver tailored solutions across various industries, helping businesses thrive in the digital age.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {industries.map((industry) => (
            <Card key={industry.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <industry.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Industries;
