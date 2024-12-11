import { motion } from "framer-motion";
import { Lightbulb, Users, Shield, Handshake } from "lucide-react";
import CountUp from 'react-countup';



const About = () => {
 

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95">
      {/* Hero Section */}
      <motion.section
      className="relative py-20 px-6 bg-gradient-to-r from-tech-purple to-tech-blue text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-4xl">
      <div className="flex justify-center items-center py-12">
  <div className="text-center px-4 md:px-8">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down">
      About Techyhut Solutions
    </h1>
    <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-up">
      At Techyhut Solutions, we believe in more than just delivering technology — we deliver innovation. We are a passionate team of developers, designers, and strategists united by the drive to push the boundaries of what's possible. Our mission is simple: to leverage cutting-edge technologies like AI, Blockchain, and Cloud computing to empower businesses in their digital transformation journey.
    </p>
    <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-up">
      With over <span className="font-semibold text-primary">35+ years of combined experience</span>, our expertise spans across various industries, and we bring tailored solutions that not only meet your business needs but also help you stay ahead of the competition. From building scalable web applications to deploying advanced machine learning models, our team is dedicated to creating impactful digital solutions that drive growth, efficiency, and security.
    </p>
    <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-up">
      But we're not just about technology — we're about people. Every solution we design is rooted in understanding the unique challenges and goals of our clients. Our approach is client-first, ensuring that we build long-lasting partnerships based on transparency, trust, and mutual success.
    </p>
    <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-up">
      Whether you're looking to streamline operations with Cloud solutions, build the next-generation AI-powered application, or simply ensure your digital presence is secure and optimized, Techyhut Solutions is here to help you succeed in the digital age. Join us in shaping the future of your business with technology that transforms.
    </p>
  </div>
</div>

        <div className="flex flex-wrap gap-8 justify-center items-center">
          <div className="text-center">
            <span className="text-4xl font-bold block">
              <CountUp start={0} end={35} duration={2} />
            </span>
            <span className="text-sm opacity-80">Years Experience</span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold block">
              <CountUp start={0} end={50} duration={2} />
            </span>
            <span className="text-sm opacity-80">Projects Delivered</span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold block">
              <CountUp start={0} end={5} duration={2} />
            </span>
            <span className="text-sm opacity-80">Expert Team Members</span>
          </div>
        </div>
      </div>
    </motion.section>

      {/* Why Choose Us Section */}
      <section className="py-1 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            {...fadeIn}
          >
            Why Choose Techyhut?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <reason.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 px-6 bg-tech-dark text-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To empower businesses of all sizes by providing transformative, tech-driven solutions that simplify complexity, enhance productivity, and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <value.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const reasons = [
  {
    icon: Shield,
    title: "Expertise You Can Trust",
    description: "Over 30 years of combined experience, with a proven track record of successful projects."
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We stay ahead of industry trends to provide future-proof technologies that drive real results."
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Every solution is tailored to meet the specific needs of our clients, ensuring maximum impact and value."
  },
  {
    icon: Handshake,
    title: "Collaboration & Transparency",
    description: "We work closely with you throughout the process, ensuring your vision is realized and your goals are met."
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always striving for the next big idea to push the boundaries of what's possible."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Delivering reliable, secure, and trustworthy solutions that our clients can count on."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working hand-in-hand with clients to co-create solutions that drive success."
  }
];

export default About;
