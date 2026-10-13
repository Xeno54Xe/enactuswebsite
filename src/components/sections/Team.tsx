import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Avatar from '../Avatar';
import { porHolders } from '../../data/team';

// The first entry (the President) is the default spotlight
const DEFAULT_INDEX = 0;

const Team: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_INDEX);
  const active = porHolders[activeIndex];

  const linkClasses =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-300 border border-charcoal-500 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300';

  return (
    <section id="team" className="backdrop backdrop-dark py-20 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-yellow-400">PoR Holders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The position-of-responsibility holders who lead Enactus BITS Pilani and keep 
            every project moving from idea to impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating photos: each one bobs at its own pace; clicking one spotlights it */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-8 max-w-4xl mx-auto mb-10">
            {porHolders.map((member, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={member.name}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${member.name}`}
                  aria-pressed={isActive}
                  className="float-bob flex flex-col items-center"
                  style={{ animationDelay: `${index * -0.9}s`, animationDuration: `${4.5 + (index % 3) * 0.8}s` }}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-offset-4 ring-offset-charcoal-800 transition-all duration-500 ${
                      isActive
                        ? 'ring-2 ring-yellow-400 scale-125 shadow-gold-glow'
                        : 'ring-1 ring-charcoal-500 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Avatar src={member.image} name={member.name} className="text-xl" />
                  </div>
                  <span
                    className={`mt-4 text-xs sm:text-sm font-semibold transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {member.name.split(' ')[0]}
                  </span>
                  <span
                    className={`mt-0.5 text-[11px] sm:text-xs leading-tight text-center transition-colors duration-500 ${
                      isActive ? 'text-yellow-400' : 'text-gray-500'
                    }`}
                  >
                    {member.role}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Spotlight card for the selected member */}
          <div className="max-w-2xl mx-auto bg-charcoal-700 rounded-2xl border border-charcoal-500 p-6 sm:p-8 min-h-[13rem] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
              >
                <div className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden ring-2 ring-yellow-400 ring-offset-4 ring-offset-charcoal-700">
                  <Avatar src={active.image} name={active.name} className="text-3xl" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-semibold text-white">{active.name}</h3>
                  <p className="text-yellow-400 font-medium mb-1">{active.role}</p>
                  {(active.department || active.year) && (
                    <p className="text-gray-400 text-sm">
                      {[active.department, active.year].filter(Boolean).join(' · ')}
                    </p>
                  )}

                  {/* LinkedIn and Email */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
                    {active.linkedin && (
                      <a
                        href={active.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${active.name} on LinkedIn`}
                        className={linkClasses}
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                    <a href={`mailto:${active.email}`} aria-label={`Email ${active.name}`} className={linkClasses}>
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
