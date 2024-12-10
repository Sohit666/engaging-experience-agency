import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      slug: "ai-in-business",
      title: "The Future of AI in Business",
      date: "March 15, 2024",
      category: "Technology Trends",
      excerpt: "Explore how artificial intelligence is revolutionizing business operations and decision-making processes...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60",
    },
    {
      slug: "blockchain-revolution",
      title: "The Blockchain Revolution",
      date: "March 14, 2024",
      category: "Blockchain",
      excerpt: "Discover how blockchain technology is transforming industries beyond cryptocurrency...",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60",
    },
    {
      slug: "web3-future",
      title: "Web3: The Next Internet Revolution",
      date: "March 13, 2024",
      category: "Web3",
      excerpt: "Understanding the next evolution of the internet and its impact on digital experiences...",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
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
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" className="group">
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

export default Blog;