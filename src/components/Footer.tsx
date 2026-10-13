import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from './enactus-logo-white.png';
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/enactus.bitspilani/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://in.linkedin.com/company/enactus-bppc', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="backdrop backdrop-dark bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="inline-flex flex-col mb-5">
              <img src={logo} alt="Enactus" className="h-12 w-auto object-contain" />
              <span className="pl-[19%] mt-1 text-sm font-medium leading-none text-white/90">
                BITS Pilani
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering communities through entrepreneurial action. We believe in creating 
              a better world where everyone has the opportunity to succeed.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    className="text-gray-300 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500" />
                <a href="mailto:contact@enactusbitsp.org" className="text-gray-300 hover:text-gold-500 break-all">contact@enactusbitsp.org</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-500" />
                <span className="text-gray-300">BITS Pilani, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Enactus BITS Pilani. All rights reserved. Built with passion for social impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;