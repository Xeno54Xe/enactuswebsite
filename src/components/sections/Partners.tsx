import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import enactusLogo from '../../assets/partners/enactus.png';
import kpmgLogo from '../../assets/partners/kpmg.svg';
import unileverLogo from '../../assets/partners/unilever.svg';
import walmartLogo from '../../assets/partners/walmart.svg';

// Organisations behind the Enactus network that our chapter is part of
const partners = [
  {
    name: 'Enactus Global',
    logo: enactusLogo,
    tag: 'We are a chapter',
    description: 'Enactus BITS Pilani is an official chapter of Enactus, the global network of students, academics and business leaders using entrepreneurial action for social good. As a member team we compete at the Enactus India National Competition, with national champions going on to the Enactus World Cup.'
  },
  {
    name: 'KPMG',
    logo: kpmgLogo,
    tag: 'Enactus India & Global',
    description: 'A long-standing global partner of Enactus. KPMG in India mentors Enactus college teams on their social entrepreneurship projects.'
  },
  {
    name: 'Unilever',
    logo: unileverLogo,
    tag: 'Enactus Global',
    description: 'A corporate partner of Enactus that has backed student competitions focused on leadership and sustainability.'
  },
  {
    name: 'Walmart',
    logo: walmartLogo,
    tag: 'Enactus Global',
    description: 'One of the major corporate supporters of Enactus programmes for student-led enterprise around the world.'
  }
];

// Distance of each logo from the centre of the orbit, as a share of its width
const ORBIT_RADIUS = 40;
const ROTATE_EVERY_MS = 4000;

const Partners: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = partners[activeIndex];

  // Step through the partners until the visitor hovers or picks one
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % partners.length);
    }, ROTATE_EVERY_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="partners" className="backdrop backdrop-light py-20 bg-gray-50">
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
            Our Partners &amp; <span className="highlight">Network</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As part of Enactus India and the global Enactus network, we work alongside the 
            organisations that back student-led social enterprise.
          </p>
        </motion.div>

        {/* Revolving partner orbit with details for the highlighted partner */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`orbit relative w-full max-w-md mx-auto aspect-square ${isPaused ? 'orbit-paused' : ''}`}
          >
            {/* Orbit rings */}
            <div className="absolute inset-[10%] rounded-full border-2 border-dashed border-yellow-500/50" />
            <div className="absolute inset-[27%] rounded-full border border-gray-200" />

            {/* Our chapter at the centre */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-3xl overflow-hidden shadow-md">
              <img src="/favicon.png" alt="Enactus BITS Pilani" className="w-full h-full object-cover" />
            </div>

            {/* Revolving logos (each one counter-rotates to stay upright) */}
            <div className="orbit-spin absolute inset-0">
              {partners.map((partner, index) => {
                const angle = (index / partners.length) * 2 * Math.PI - Math.PI / 2;
                const isActive = index === activeIndex;

                return (
                  <div
                    key={partner.name}
                    className="absolute w-[24%] aspect-square -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${50 + ORBIT_RADIUS * Math.cos(angle)}%`,
                      top: `${50 + ORBIT_RADIUS * Math.sin(angle)}%`,
                    }}
                  >
                    <button
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${partner.name}`}
                      aria-pressed={isActive}
                      className={`orbit-spin-reverse w-full h-full rounded-full bg-paper flex items-center justify-center p-[18%] border-2 shadow-sm ${
                        isActive ? 'border-yellow-400 shadow-gold-glow' : 'border-gray-200 hover:border-yellow-400'
                      }`}
                    >
                      <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Highlighted partner */}
          <div>
            <div className="bg-paper border border-gray-200 rounded-2xl p-8 shadow-sm min-h-[19rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-14 mb-6 flex items-center">
                    <img src={active.logo} alt={active.name} className="h-full max-w-[12rem] object-contain object-left" />
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-charcoal-800">{active.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-yellow-400 text-charcoal-900 text-xs font-semibold">
                      {active.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{active.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Partner picker */}
            <div className="flex flex-wrap gap-3 mt-6">
              {partners.map((partner, index) => (
                <button
                  key={partner.name}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                    index === activeIndex
                      ? 'bg-charcoal-800 text-white border-charcoal-800'
                      : 'bg-paper text-charcoal-800 border-gray-200 hover:border-yellow-500'
                  }`}
                >
                  {partner.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;