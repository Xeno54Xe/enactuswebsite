import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from './enactus-logo-white.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Sections live on the home page, so route there first when on another page
  const scrollToSection = (sectionId: string) => {
    navigate(`/#${sectionId}`);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Team', id: 'team' },
    { name: 'Partners', id: 'partners' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-charcoal-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo: Enactus mark with "BITS Pilani" set under the wordmark */}
          <Link to="/" aria-label="Enactus BITS Pilani home" className="inline-flex flex-col">
            <img src={logo} alt="Enactus" className="h-10 md:h-12 w-auto object-contain" />
            <span className="pl-[19%] mt-1 text-white/90 font-medium leading-none text-[11px] md:text-sm">
              BITS Pilani
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-charcoal-700/95 backdrop-blur-md rounded-lg mt-2 mb-3 p-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white hover:text-yellow-400 py-2 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
