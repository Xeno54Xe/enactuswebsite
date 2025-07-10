import React from 'react';
import { motion } from 'framer-motion';
import { Building, Handshake } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Tech Corp',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Technology solutions and digital infrastructure support'
    },
    {
      name: 'Green Energy Ltd',
      logo: 'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Sustainable energy solutions for community projects'
    },
    {
      name: 'Education Foundation',
      logo: 'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Educational resources and scholarship programs'
    },
    {
      name: 'Healthcare Plus',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Healthcare initiatives and medical support'
    },
    {
      name: 'Community Bank',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Financial services and microfinance support'
    },
    {
      name: 'Local Foods Co',
      logo: 'https://images.pexels.com/photos/6646966/pexels-photo-6646966.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Sustainable agriculture and food security programs'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
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
            Our <span className="text-yellow-400">Partners</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're grateful to our partners and sponsors who share our vision of creating 
            positive social impact through entrepreneurial action.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                {/* Partner Logo */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Building className="h-12 w-12 text-yellow-500" />
                </div>

                {/* Partner Info */}
                <h3 className="text-xl font-semibold text-charcoal-800 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <Handshake className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-charcoal-800 mb-4">
              Partner With Us
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hands with us to create meaningful social impact. We offer various 
              partnership opportunities that align with your corporate social responsibility goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {['Strategic Partnership', 'Project Sponsorship', 'Community Support'].map((tier, index) => (
                <div key={tier} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-yellow-500 font-semibold mb-2">{tier}</h4>
                  <p className="text-gray-500 text-sm">
                    Comprehensive support with maximum visibility and impact recognition.
                  </p>
                </div>
              ))}
            </div>
            <motion.button
              className="bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;