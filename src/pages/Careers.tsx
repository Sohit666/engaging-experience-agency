import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Join Our <span className="text-primary">Team</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          Be part of a team that's shaping the future of technology. Explore our current openings.
        </p>

        <div className="grid gap-8 animate-fade-up">
          {positions.map((position) => (
            <Card key={position.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{position.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {position.department}
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {position.location}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <Button>Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;