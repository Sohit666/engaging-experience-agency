import Navigation from "@/components/Navigation";
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
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-up">
          Find answers to common questions about our services and processes.
        </p>

        <div className="max-w-3xl mx-auto animate-fade-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;