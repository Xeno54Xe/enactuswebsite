import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Calendar, MapPin, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  impact: string;
  location: string;
  status: 'Active' | 'Completed';
  image: string;
  duration: string;
  team: string;
  beneficiaries: string;
  budget: string;
  challenges: string;
  outcomes: string;
}

const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
  id: 1,
  title: 'Project Bioenzyme',
  description: 'Turning fruit and vegetable peels into eco-friendly, effective detergents.',
  fullDescription: `Project Bioenzyme addresses India's rising chemical pollution and organic waste crisis by creating biodegradable, non-toxic detergents from fruit and vegetable peels. Our innovation combats water pollution and landfill emissions while promoting a circular economy. Ecozyme's formulation is gentle on skin, safe for marine life, and competitively priced. The project integrates refill models, digital marketing, and community-driven sourcing to scale sustainably across eco-conscious households and businesses.`,
  impact: 'Reduced landfill waste and chemical runoff in pilot regions',
  location: 'Urban pilot regions, scalable to Tier 2/3 cities',
  status: 'Active',
  image: 'https://images.pexels.com/photos/6621390/pexels-photo-6621390.jpeg?auto=compress&cs=tinysrgb&w=800',
  duration: 'Ongoing since 2023',
  team: '12 core members + research collaborators',
  beneficiaries: 'Eco-conscious consumers, farmers, waste vendors',
  budget: '₹4,00,000',
  challenges: 'Market awareness, consumer price sensitivity, sourcing consistency',
  outcomes: 'Developed and tested MVP, 68% gross margin, product safe for sensitive users and babies, positive lab validation of saponins and flavonoids'
},
{
  id: 2,
  title: 'Project Amrut',
  description: 'Revolutionizing clean water access with potato gel-based water filtration.',
  fullDescription: `Project Amrut tackles the global water crisis by introducing a low-cost, biodegradable water filter made from potato gel. Designed to remove harmful contaminants like TDS, nitrates, and fluoride from groundwater, this innovation directly benefits rural and low-income communities. Inspired by biomimicry and backed by BITS Pilani research, the filter is affordable, sustainable, and scalable — redefining clean water accessibility through frugal engineering and decentralization.`,
  impact: 'Improved water quality for underserved households',
  location: 'Rural and peri-urban India',
  status: 'Active',
  image: 'https://images.pexels.com/photos/674948/pexels-photo-674948.jpeg?auto=compress&cs=tinysrgb&w=800',
  duration: 'Ongoing since 2024',
  team: '10+ researchers and field volunteers',
  beneficiaries: 'Households in fluoride-affected and low-resource areas',
  budget: '₹2,00,000',
  challenges: 'Initial awareness, performance validation in varied conditions',
  outcomes: 'Validated in lab settings, successful pilot deployment, reduced TDS and nitrate levels significantly'
},
{
      id: 3,
      title: 'Project Kavach',
      description: 'Lite!',
      fullDescription: `This program empowers rural women by providing them with vocational training, business development skills, and access to microfinance. We have established self-help groups, conducted workshops on financial literacy, and helped women start their own small businesses in areas like tailoring, handicrafts, and food processing.`,
      impact: '50+ women trained',
      location: 'Local Communities',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12 months',
      team: '12 volunteers',
      beneficiaries: '50+ women, 150+ family members',
      budget: '₹3,50,000',
      challenges: 'Cultural barriers, lack of initial capital, market access difficulties',
      outcomes: '40 women started their own businesses, average income increase of 150%, 5 self-help groups established'
    },
{
  id: 4,
  title: 'Project Chulha',
  description: 'Improving rural health through safer, smoke-free cookstoves.',
  fullDescription: `Project Chulha addresses the harmful effects of traditional biomass cooking in rural Pilani. Our improved cookstove design enables complete combustion, reducing toxic emissions and indoor air pollution. Inspired by the African Elsa stove, it includes oxygen inlets and produces biochar as a byproduct — a valuable organic fertilizer. This affordable solution not only protects women and children from respiratory illnesses but also empowers families through sustainable income generation.`,
  impact: '100+ households benefited',
  location: 'Villages around Pilani',
  status: 'Active',
  image: 'https://images.pexels.com/photos/16193171/pexels-photo-16193171/free-photo-of-stove-on-fire-in-a-traditional-kitchen.jpeg?auto=compress&cs=tinysrgb&w=800',
  duration: 'Ongoing since 2020',
  team: '15 volunteers',
  beneficiaries: '100+ families, 300+ individuals',
  budget: '₹50,000',
  challenges: 'Cultural resistance, awareness gaps, initial trust-building',
  outcomes: 'Reduced indoor pollution by 60%, increased adoption of improved cookstoves, generated biochar for local use and sale'
},
{
  id: 5,
  title: 'Project SOCORS',
  description: 'Digitizing Kirana stores to ensure safe shopping during and beyond the pandemic.',
  fullDescription: `Project SOCORS was launched in response to the challenges faced by Kirana stores during the COVID-19 lockdown. We developed a web app that enables customers to book shopping time slots, order groceries, and access local shop listings. The app minimizes crowding, facilitates delivery, and supports digital transactions. It also helps small retailers form a cooperative cartel to share resources, avoid price wars, and optimize sales using data insights. SOCORS empowers local stores to compete with major grocery chains and remain the backbone of India's food retail sector.`,
  impact: 'Pilot launched in Delhi with positive adoption',
  location: 'Vasant Kunj, Delhi (C8 & C9 Colonies)',
  status: 'Completed',
  image: 'https://images.pexels.com/photos/5806821/pexels-photo-5806821.jpeg?auto=compress&cs=tinysrgb&w=800',
  duration: '6 months',
  team: '18 volunteers',
  beneficiaries: '30+ shopkeepers, 2000+ residents',
  budget: '₹1,20,000',
  challenges: 'Initial tech adoption, vendor onboarding, customer trust post-COVID',
  outcomes: 'Digitized 30+ Kirana stores, improved sales tracking, built resilient local supply chains'
},

    {
      id: 6,
      title: 'Koi aur project nhi hai',
      description: 'Providing quality education resources and digital literacy to underserved rural communities.',
      fullDescription: `Our Rural Education Initiative is a comprehensive program designed to bridge the educational gap in remote villages across Rajasthan. We have established digital learning centers, trained local teachers, and provided tablets loaded with educational content to over 200 students. The program focuses on basic literacy, numeracy, and digital skills that are essential for the 21st century.`,
      impact: '200+ students benefited',
      location: 'Rajasthan Villages',
      status: 'Active',
      image: 'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '18 months',
      team: '15 volunteers',
      beneficiaries: '200+ students, 50+ families',
      budget: '₹5,00,000',
      challenges: 'Limited internet connectivity, language barriers, resistance to technology adoption',
      outcomes: '85% improvement in literacy rates, 70% of students now digitally literate, 3 local teachers trained as digital educators'
    }
  ];

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLearnMore = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 relative bg-gray-50">
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
            Our <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the impact we're making through innovative social entrepreneurship projects 
            that address real-world challenges and create lasting change.
          </p>
        </motion.div>

        {/* Projects Display */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 shadow-lg ${
              currentIndex === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-yellow-400 text-white hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={currentIndex >= projects.length - 3}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 shadow-lg ${
              currentIndex >= projects.length - 3 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-yellow-400 text-white hover:scale-110'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Container */}
          <div className="px-12">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Active' 
                            ? 'bg-green-500/20 text-green-600 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal-800 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2 text-yellow-500" />
                          {project.impact}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2 text-green-400" />
                          {project.location}
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <motion.button
                        onClick={() => handleLearnMore(project)}
                        className="w-full bg-yellow-400 text-white py-2 px-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-charcoal-800 mb-4">
              Have a Project Idea?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for new opportunities to create positive impact. 
              Share your ideas and let's work together to make a difference.
            </p>
            <motion.button
              className="bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Idea
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-50 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-charcoal-800 mb-2">{selectedProject.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedProject.status === 'Active' 
                      ? 'bg-green-500/20 text-green-600 border border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-charcoal-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                        Duration
                      </div>
                      <span className="font-semibold text-charcoal-800">{selectedProject.duration}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Users className="h-4 w-4 mr-2 text-green-400" />
                        Team Size
                      </div>
                      <span className="font-semibold text-charcoal-800">{selectedProject.team}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        Location
                      </div>
                      <span className="font-semibold text-charcoal-800">{selectedProject.location}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Budget</div>
                      <span className="font-semibold text-charcoal-800">{selectedProject.budget}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-4">Project Overview</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-2">Beneficiaries</h4>
                      <p className="text-gray-600 text-sm">{selectedProject.beneficiaries}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-2">Key Challenges</h4>
                      <p className="text-gray-600 text-sm">{selectedProject.challenges}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-2">Outcomes Achieved</h4>
                      <p className="text-gray-600 text-sm">{selectedProject.outcomes}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-xl p-4 mt-6">
                    <h4 className="text-lg font-semibold text-charcoal-800 mb-2">Impact Achieved</h4>
                    <p className="text-charcoal-800 text-lg font-semibold">{selectedProject.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex-1">
                  Get Involved
                </button>
                <button className="px-6 py-3 rounded-full font-semibold text-charcoal-800 border-2 border-gray-300 hover:border-yellow-400 transition-all flex-1">
                  Share Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;