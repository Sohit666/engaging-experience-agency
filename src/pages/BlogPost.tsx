import { useParams } from "react-router-dom";


const blogPosts = {
  "ai-in-business": {
    title: "The Future of AI in Business",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    content: `Artificial Intelligence is revolutionizing how businesses operate. From automated customer service to predictive analytics, AI is becoming an integral part of modern business operations. Companies that embrace AI technologies are seeing significant improvements in efficiency and decision-making processes.

    The implementation of AI in business processes has shown remarkable results across various sectors. Machine learning algorithms are helping companies better understand customer behavior, optimize operations, and create more personalized experiences.

    As we look to the future, the role of AI in business will only continue to grow. Organizations that adapt to this technological evolution will be better positioned for success in an increasingly competitive market.`,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
  },
  "blockchain-revolution": {
    title: "The Blockchain Revolution",
    date: "March 14, 2024",
    author: "Michael Chen",
    content: `Blockchain technology is transforming industries beyond cryptocurrency. Its applications in supply chain management, healthcare, and financial services are creating new possibilities for secure and transparent operations.

    The decentralized nature of blockchain provides unprecedented security and transparency in digital transactions. Smart contracts are automating complex processes while ensuring trust and reliability.

    As blockchain technology matures, we're seeing innovative applications that go beyond traditional use cases, opening new opportunities for businesses across sectors.`,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
  },
  "web3-future": {
    title: "Web3: The Next Internet Revolution",
    date: "March 13, 2024",
    author: "Emily Rodriguez",
    content: `Web3 represents the next evolution of the internet, promising a more decentralized and user-centric digital experience. This new paradigm is built on blockchain technology and emphasizes user privacy and data ownership.

    The shift to Web3 is creating new opportunities for businesses and developers. Decentralized applications (dApps) are emerging as alternatives to traditional web services, offering users more control over their digital interactions.

    As Web3 technology continues to evolve, we're seeing innovative solutions that address the limitations of current internet infrastructure while creating new possibilities for digital interaction and commerce.`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
  
      
      <div className="container mx-auto pt-32 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 animate-fade-down">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8 animate-fade-up">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8 animate-fade-up"
          />

          <div className="prose prose-lg max-w-none animate-fade-up">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default BlogPost;