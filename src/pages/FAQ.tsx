import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of software development services including custom software development, mobile app development, cloud solutions, and digital transformation consulting.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise solution could take 6+ months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular sprints and client check-ins. This includes requirements gathering, design, development, testing, and deployment phases with continuous feedback and iterations.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support and maintenance packages to ensure your software continues to perform optimally after launch. This includes bug fixes, updates, and feature enhancements.",
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, and more. We choose the best technology stack based on your specific project requirements.",
    },
    {
      question: "How do you handle project pricing?",
      answer: "We offer flexible pricing models including fixed-price projects and time-and-materials arrangements. The specific model depends on project scope, complexity, and requirements.",
    },
    {
      question: "Do you offer UI/UX design services?",
      answer: "Yes, we provide end-to-end UI/UX design services, from user research and wireframing to prototyping and high-fidelity design. Our design approach focuses on user-centric and visually appealing solutions that enhance user experience.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have experience across various industries, including healthcare, finance, e-commerce, education, and logistics. We tailor our solutions to meet the unique needs and challenges of each industry.",
    },
    {
      question: "Can you integrate with third-party systems?",
      answer: "Absolutely! We have experience integrating with a variety of third-party systems and APIs, such as payment gateways, CRM tools, ERP systems, and social media platforms. We ensure seamless data flow and functionality.",
    },
    {
      question: "What is your approach to security?",
      answer: "We prioritize security throughout the development process. We implement industry-standard security measures, such as encryption, authentication protocols, and regular security audits, to ensure your application is safe and secure.",
    },
    {
      question: "Do you offer cloud-based solutions?",
      answer: "Yes, we specialize in cloud-based solutions, including cloud hosting, infrastructure setup, and cloud-native application development. We leverage platforms like AWS, Google Cloud, and Azure to deliver scalable, reliable, and cost-effective solutions.",
    },
    {
      question: "What is your experience with AI and machine learning?",
      answer: "We have expertise in building AI and machine learning solutions, including natural language processing, predictive analytics, and recommendation systems. We help businesses leverage these technologies for smarter decision-making and enhanced automation.",
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow a robust testing process that includes unit testing, integration testing, user acceptance testing (UAT), and performance testing. Our focus is on delivering high-quality, bug-free software that meets your business needs.",
    },
    {
      question: "What is your project management approach?",
      answer: "We use agile project management tools like Jira or Trello to track project progress, set milestones, and communicate effectively with clients. This ensures transparency, flexibility, and that we meet project deadlines and goals.",
    },
    {
      question: "Can you handle large-scale enterprise solutions?",
      answer: "Yes, we have extensive experience building and scaling enterprise-level solutions. Whether it’s handling large volumes of data, supporting multiple users, or integrating complex systems, we have the expertise to deliver robust solutions.",
    },
    {
      question: "Do you offer DevOps services?",
      answer: "Yes, we offer DevOps services to streamline development, deployment, and infrastructure management. Our DevOps practices enhance collaboration, automation, and continuous delivery for faster and more reliable software releases.",
    },
    {
      question: "How do you handle project revisions or changes?",
      answer: "We understand that project requirements can evolve. Our agile approach allows us to incorporate feedback and changes at various stages of development. We ensure that any revisions are implemented efficiently and with minimal disruption.",
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we love partnering with startups to bring innovative ideas to life. We offer cost-effective, scalable solutions that grow with your business, and our flexible approach ensures we can adapt to your evolving needs.",
    },
    {
      question: "What is the first step in working with you?",
      answer: "The first step is a consultation where we discuss your project requirements, business goals, and challenges. From there, we create a roadmap and a proposal that outlines the project scope, timeline, and cost.",
    },
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95 text-white pb-10">
      <div className="container mx-auto pt-32 px-4">
        {/* Page Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-down">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-up">
          Find answers to common questions about our services and processes.
        </p>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto animate-fade-up">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 bg-white/10 p-4 rounded-lg backdrop-blur-md"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg shadow-md overflow-hidden"
              >
                <AccordionTrigger className="text-lg font-semibold px-4 py-3 bg-white/20 text-white hover:bg-primary/20 transition-all duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white/10 p-4 text-gray-300 rounded-b-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
