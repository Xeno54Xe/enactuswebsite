import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Users, Globe, Target, Lightbulb, Trophy, ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const milestones: Milestone[] = [
    {
      year: '2017',
      title: 'Foundation',
      description: 'Enactus BITS Pilani was established with a vision to create social impact',
      icon: Users
    },
    {
      year: '2019',
      title: 'First Project Launch',
      description: 'Launched our first community development project in rural Rajasthan',
      icon: Target
    },
    {
      year: '2020',
      title: 'National recognition',
      description: 'Won Enactus India National Competition',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: '1000+ lives impacted',
      description: 'Milestone reached across all projects',
      icon: Award
    },
    {
      year: '2022',
      title: 'World Cup participation',
      description: 'Represented India at Enactus World Cup',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded operations to 5 states with 15+ active projects',
      icon: Trophy
    },
    {
      year: '2024',
      title: '5000+ beneficiaries',
      description: 'Expanded reach across multiple states',
      icon: Calendar
    }
  ];

const ADVANCE_EVERY_MS = 4000;

const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = milestones[activeIndex];
  const lastIndex = milestones.length - 1;

  // Walk through the years until the visitor hovers or picks one
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % milestones.length);
    }, ADVANCE_EVERY_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const step = (direction: -1 | 1) => {
    setActiveIndex((index) => (index + direction + milestones.length) % milestones.length);
  };

  return (
    <section id="timeline" className="backdrop backdrop-dark py-20 relative overflow-hidden bg-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to global recognition, discover the milestones that shaped our impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Horizontal track: floating year markers on a line that fills up to the selected year */}
          <div className="relative mb-10">
            <div
              className="absolute top-[66px] sm:top-[78px] h-1 bg-charcoal-500 rounded-full"
              style={{ left: `${50 / milestones.length}%`, right: `${50 / milestones.length}%` }}
            >
              <div
                className="h-full bg-yellow-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(activeIndex / lastIndex) * 100}%` }}
              />
            </div>

            <div className="relative grid" style={{ gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))` }}>
              {milestones.map((milestone, index) => {
                const isActive = index === activeIndex;
                const isReached = index <= activeIndex;

                return (
                  <button
                    key={milestone.year}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${milestone.year}: ${milestone.title}`}
                    aria-pressed={isActive}
                    className="group flex flex-col items-center"
                  >
                    {/* Floating icon bubble */}
                    <span
                      className="float-bob mb-4 block"
                      style={{ animationDelay: `${index * -0.7}s`, animationDuration: `${4 + (index % 3) * 0.7}s` }}
                    >
                      <span
                        className={`flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full border transition-all duration-500 ${
                          isActive
                            ? 'bg-yellow-400 border-yellow-400 text-charcoal-900 scale-110 shadow-gold-glow'
                            : isReached
                              ? 'bg-charcoal-700 border-yellow-400/60 text-yellow-400'
                              : 'bg-charcoal-700 border-charcoal-500 text-gray-500 group-hover:border-yellow-400/60 group-hover:text-yellow-400'
                        }`}
                      >
                        <milestone.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>
                    </span>

                    {/* Dot on the line */}
                    <span
                      className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                        isReached ? 'bg-yellow-400 border-charcoal-800' : 'bg-charcoal-600 border-charcoal-500'
                      } ${isActive ? 'scale-150' : ''}`}
                    />

                    <span
                      className={`mt-4 font-bold transition-all duration-500 ${
                        isActive ? 'text-yellow-400 text-base sm:text-2xl' : 'text-gray-500 text-xs sm:text-base group-hover:text-gray-300'
                      }`}
                    >
                      {milestone.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected milestone */}
          <div className="relative max-w-3xl mx-auto bg-charcoal-700 rounded-2xl border border-charcoal-500 p-6 sm:p-8 min-h-[12rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.year}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Large faint year behind the text */}
                <span className="pointer-events-none select-none absolute -right-2 -bottom-6 text-8xl sm:text-9xl font-extrabold tracking-tight text-white/5">
                  {active.year}
                </span>

                <div className="relative flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 bg-yellow-400 rounded-xl text-charcoal-900">
                    <active.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-yellow-400 font-semibold mb-1">{active.year}</p>
                    <h3 className="text-2xl font-semibold text-white mb-2">{active.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{active.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Previous / next */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => step(-1)}
              aria-label="Previous milestone"
              className="p-2 rounded-full border border-charcoal-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-gray-400 tabular-nums">
              {activeIndex + 1} / {milestones.length}
            </span>
            <button
              onClick={() => step(1)}
              aria-label="Next milestone"
              className="p-2 rounded-full border border-charcoal-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
