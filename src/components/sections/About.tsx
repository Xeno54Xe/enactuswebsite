import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award } from 'lucide-react';
import snaps from './enactus-snaps.png';
const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empowering students to drive social change through innovative, entrepreneurial action and community-based solutions.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, empathy, and responsibility guide every step of our entrepreneurial journey.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A united team of changemakers working to solve real problems with sustainable business ideas.'
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Creating measurable, lasting change through socially conscious entrepreneurship and scalable grassroots projects.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
            About <span className="text-yellow-400">Enactus</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Enactus is a global, non-profit organization that brings together student, academic, and business leaders who are committed to using the power of entrepreneurial action to improve the quality of life and standard of living for people in need.<br></br>
            At Enactus BITS Pilani, we’re part of this international network mentored by KPMG, empowering students to take ENTrepreneurial ACTion to create meaningful and sustainable impact. We believe in the power of youth-led innovation to tackle global challenges, fostering a generation of entrepreneurial leaders ready to change the world.

          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-yellow-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <value.icon className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-charcoal-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-charcoal-800 mb-6">Our Story at BITS Pilani</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
               Founded in 2017, our journey began with a simple yet powerful mission — to use the power of innovation and business to bring sustainable change to our surroundings. Since then, we've worked tirelessly to bridge the gap between ideas and impact, always striving to make the world more inclusive, equitable, and empowered.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
               From bringing traditional arts and crafts back to the mainstream to modernizing age-old cooking practices in rural kitchens, every project we’ve taken up has been rooted in real problems and backed by sustainable solutions. Our diverse initiatives reflect our belief that no problem is too small and no solution is too ambitious when guided by purpose.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
              We are proud to be a part of Enactus, a global community of student, academic, and business leaders mentored by KPMG, united by one goal — to drive ENTrepreneurial ACTion for others and create a better world for all of us.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">6+</div>
                  <div className="text-gray-500">Years Active</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">15+</div>
                  <div className="text-gray-500">Awards Won</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">1000+</div>
                  <div className="text-gray-500">Lives Touched</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
  className="w-full h-80 bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-2xl relative overflow-hidden"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  {/* Subtle background gradient layer */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl" />

  {/* Content area */}
  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4">
    {/* Gradient text */}

    {/* Group photo */}
    <img
      src={snaps} // replace with actual image path
      alt="Group Photo"
      className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
    />
  </div>
</motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;