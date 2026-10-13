import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Calendar, MapPin, Wallet, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  impact: string;
  location: string;
  status: 'Active' | 'Completed';
  // Photo URL; leave empty to show the yellow placeholder
  image: string;
  duration: string;
  team: string;
  beneficiaries: string;
  budget: string;
  challenges: string;
  outcomes: string;
}

// Horizontal gap between neighbouring cards in the stack, by screen width
const getCardSpacing = () => (window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 230 : 290);

const ADVANCE_EVERY_MS = 4500;

const modalTabs = ['Overview', 'Details', 'Impact'] as const;
type ModalTab = (typeof modalTabs)[number];

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFC222"/><stop offset="1" stop-color="#EFAE00"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/></svg>'
  );

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src !== FALLBACK_IMAGE) {
    e.currentTarget.src = FALLBACK_IMAGE;
  }
};

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cardSpacing, setCardSpacing] = useState(getCardSpacing);
  const [isPaused, setIsPaused] = useState(false);
  const [modalTab, setModalTab] = useState<ModalTab>('Overview');
  const [linkCopied, setLinkCopied] = useState(false);

  const projects: Project[] = [
    {
  id: 1,
  title: 'Project Bioenzyme',
  description: 'Turning fruit and vegetable peels into eco-friendly, effective detergents.',
  fullDescription: `Project Bioenzyme addresses India's rising chemical pollution and organic waste crisis by creating biodegradable, non-toxic detergents from fruit and vegetable peels. Our innovation combats water pollution and landfill emissions while promoting a circular economy. Ecozyme's formulation is gentle on skin, safe for marine life, and competitively priced. The project integrates refill models, digital marketing, and community-driven sourcing to scale sustainably across eco-conscious households and businesses.`,
  impact: 'Reduced landfill waste and chemical runoff in pilot regions',
  location: 'Urban pilot regions, scalable to Tier 2/3 cities',
  status: 'Active',
  image: '',
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
  fullDescription: `Project Amrut tackles the global water crisis by introducing a low-cost, biodegradable water filter made from potato gel. Designed to remove harmful contaminants like TDS, nitrates, and fluoride from groundwater, this innovation directly benefits rural and low-income communities. Inspired by biomimicry and backed by BITS Pilani research, the filter is affordable, sustainable, and scalable, redefining clean water accessibility through frugal engineering and decentralization.`,
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
      description: 'Helping rural women build skills, savings and businesses of their own.',
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
  fullDescription: `Project Chulha addresses the harmful effects of traditional biomass cooking in rural Pilani. Our improved cookstove design enables complete combustion, reducing toxic emissions and indoor air pollution. Inspired by the African Elsa stove, it includes oxygen inlets and produces biochar as a byproduct, which is a valuable organic fertilizer. This affordable solution not only protects women and children from respiratory illnesses but also empowers families through sustainable income generation.`,
  impact: '100+ households benefited',
  location: 'Villages around Pilani',
  status: 'Active',
  image: '',
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

  ];

  useEffect(() => {
    const handleResize = () => setCardSpacing(getCardSpacing());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bring the next project to the front until the visitor hovers or opens one
  useEffect(() => {
    if (isPaused || selectedProject) return;
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % projects.length);
    }, ADVANCE_EVERY_MS);
    return () => clearInterval(timer);
  }, [isPaused, selectedProject, projects.length]);

  // Lock page scroll and allow Escape to close while the modal is open
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const step = (direction: -1 | 1) => {
    setCurrentIndex((index) => (index + direction + projects.length) % projects.length);
  };

  // Position of a card relative to the front one: 0 is the front, negative is to its left
  const getOffset = (index: number) => {
    const half = Math.floor(projects.length / 2);
    return ((index - currentIndex + projects.length + half) % projects.length) - half;
  };

  const goToContact = () => {
    setSelectedProject(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShare = async (project: Project) => {
    const shareData = {
      title: `${project.title} | Enactus BITS Pilani`,
      text: project.description,
      url: `${window.location.origin}/#projects`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      }
    } catch {
      // Sharing was cancelled or is unavailable
    }
  };

  const handleLearnMore = (project: Project) => {
    setModalTab('Overview');
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="backdrop backdrop-light py-20 relative overflow-hidden bg-gray-50">
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
            Our <span className="highlight">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the impact we're making through innovative social entrepreneurship projects 
            that address real-world challenges and create lasting change.
          </p>
        </motion.div>

        {/* Floating card stack: the front project is in focus, the others fan out behind it */}
        <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="relative h-[520px] sm:h-[540px]" style={{ perspective: '1400px' }}>
            {projects.map((project, index) => {
              const offset = getOffset(index);
              const distance = Math.abs(offset);
              const isFront = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  className="absolute top-4 left-1/2 w-[270px] sm:w-[340px] -ml-[135px] sm:-ml-[170px]"
                  initial={false}
                  animate={{
                    x: offset * cardSpacing,
                    scale: 1 - distance * 0.14,
                    rotateY: offset * -16,
                    zIndex: 10 - distance,
                  }}
                  transition={{ type: 'spring', stiffness: 170, damping: 24 }}
                >
                  {/* Inner wrapper carries the bobbing so it does not fight the stack animation */}
                  <div
                    className="float-bob"
                    style={{ animationDelay: `${index * -1.1}s`, animationDuration: `${5 + (index % 3) * 0.8}s` }}
                  >
                    <div
                      onClick={() => !isFront && setCurrentIndex(index)}
                      className={`relative h-[460px] flex flex-col bg-paper rounded-2xl overflow-hidden border ${
                        isFront
                          ? 'border-yellow-400 shadow-2xl'
                          : 'border-gray-200 shadow-md cursor-pointer hover:border-yellow-400'
                      }`}
                    >
                      {/* Cards further back are washed out rather than made see-through */}
                      <div
                        className="absolute inset-0 z-10 bg-gray-50 pointer-events-none transition-opacity duration-500"
                        style={{ opacity: distance * 0.35 }}
                      />

                      {/* Project Image */}
                      <div className="relative overflow-hidden h-44 flex-shrink-0">
                        <img
                          src={project.image || FALLBACK_IMAGE}
                          alt={project.title}
                          loading="lazy"
                          onError={handleImageError}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/60 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'Active' 
                              ? 'bg-yellow-400 text-charcoal-900' 
                              : 'bg-charcoal-800 text-white'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold text-charcoal-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                        <div className="space-y-2 mb-5">
                          <div className="flex items-start text-sm text-gray-500">
                            <Users className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-600" />
                            {project.impact}
                          </div>
                          <div className="flex items-start text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-600" />
                            {project.location}
                          </div>
                        </div>

                        <button
                          onClick={() => handleLearnMore(project)}
                          disabled={!isFront}
                          tabIndex={isFront ? 0 : -1}
                          className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold ${
                            isFront
                              ? 'bg-yellow-400 text-charcoal-900 hover:bg-yellow-500'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-2">
            <button
              onClick={() => step(-1)}
              aria-label="Previous project"
              className="p-3 rounded-full bg-yellow-400 text-charcoal-900 shadow-md hover:bg-yellow-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show ${project.title}`}
                  aria-pressed={index === currentIndex}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'w-8 bg-yellow-500' : 'w-2.5 bg-gray-300 hover:bg-yellow-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => step(1)}
              aria-label="Next project"
              className="p-3 rounded-full bg-yellow-400 text-charcoal-900 shadow-md hover:bg-yellow-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <div className="bg-paper border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-charcoal-800 mb-4">
              Have a Project Idea?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for new opportunities to create positive impact. 
              Share your ideas and let's work together to make a difference.
            </p>
            <motion.button
              onClick={goToContact}
              className="bg-yellow-400 text-charcoal-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Idea
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal (portalled to body so it sits above the navbar) */}
      {createPortal(
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm font-poppins"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              className="bg-paper rounded-2xl max-w-3xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Banner with title */}
              <div className="relative h-28 sm:h-44 flex-shrink-0">
                <img
                  src={selectedProject.image || FALLBACK_IMAGE}
                  alt={selectedProject.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 p-2 rounded-full bg-charcoal-900/60 text-white hover:bg-charcoal-900"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-5 right-5 flex flex-wrap items-end gap-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <span className={`mb-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedProject.status === 'Active' 
                      ? 'bg-yellow-400 text-charcoal-900' 
                      : 'bg-white text-charcoal-900'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              {/* Tabs keep each view short enough to fit without scrolling */}
              <div className="flex flex-shrink-0 border-b border-gray-200 px-3 sm:px-6">
                {modalTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setModalTab(tab)}
                    aria-pressed={modalTab === tab}
                    className={`relative px-3 sm:px-4 py-3 text-sm font-semibold ${
                      modalTab === tab ? 'text-charcoal-800' : 'text-gray-400 hover:text-charcoal-800'
                    }`}
                  >
                    {tab}
                    {modalTab === tab && (
                      <motion.span layoutId="project-tab" className="absolute left-0 right-0 -bottom-px h-0.5 bg-yellow-500" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-6 sm:h-[18rem] sm:flex-none">
                {modalTab === 'Overview' && (
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{selectedProject.fullDescription}</p>
                )}

                {modalTab === 'Details' && (
                  <div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[
                        { icon: Calendar, label: 'Duration', value: selectedProject.duration },
                        { icon: Users, label: 'Team', value: selectedProject.team },
                        { icon: MapPin, label: 'Location', value: selectedProject.location },
                        { icon: Wallet, label: 'Budget', value: selectedProject.budget },
                      ].map((detail) => (
                        <div key={detail.label} className="bg-gray-50 border border-gray-200 p-3 rounded-lg">
                          <div className="flex items-center text-xs text-gray-500 mb-1">
                            <detail.icon className="h-4 w-4 mr-1.5 text-yellow-600" />
                            {detail.label}
                          </div>
                          <span className="text-sm font-semibold text-charcoal-800">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                    <h4 className="font-semibold text-charcoal-800 mb-1">Beneficiaries</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.beneficiaries}</p>
                  </div>
                )}

                {modalTab === 'Impact' && (
                  <div className="space-y-4">
                    <div className="bg-yellow-400/25 rounded-xl p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-yellow-700 mb-1">Impact Achieved</h4>
                      <p className="text-charcoal-800 font-semibold">{selectedProject.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-1">Outcomes</h4>
                      <p className="text-gray-600 text-sm">{selectedProject.outcomes}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-1">Key Challenges</h4>
                      <p className="text-gray-600 text-sm">{selectedProject.challenges}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-shrink-0 gap-3 p-4 sm:px-6 border-t border-gray-200">
                <button
                  onClick={goToContact}
                  className="bg-yellow-400 text-charcoal-900 px-4 py-2.5 rounded-full font-semibold hover:bg-yellow-500 flex-1"
                >
                  Get Involved
                </button>
                <button
                  onClick={() => handleShare(selectedProject)}
                  className="px-4 py-2.5 rounded-full font-semibold text-charcoal-800 border-2 border-gray-300 hover:border-yellow-400 flex-1"
                >
                  {linkCopied ? 'Link Copied!' : 'Share Project'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </section>
  );
};

export default Projects;