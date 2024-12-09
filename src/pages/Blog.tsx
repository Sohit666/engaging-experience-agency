import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Software Development",
      date: "March 15, 2024",
      category: "Technology Trends",
      excerpt: "Explore how artificial intelligence is revolutionizing the software development process...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      title: "Building Scalable Cloud Solutions",
      date: "March 12, 2024",
      category: "Cloud Computing",
      excerpt: "Learn best practices for creating scalable and resilient cloud infrastructure...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      title: "Mobile App Development Trends 2024",
      date: "March 10, 2024",
      category: "Mobile Development",
      excerpt: "Discover the latest trends shaping the future of mobile application development...",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Our <span className="text-primary">Blog</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          Insights and updates from our team of experts on technology trends and industry best practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="outline" className="group">
                  Read More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;