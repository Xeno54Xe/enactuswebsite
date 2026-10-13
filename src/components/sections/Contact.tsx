import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Instagram, Linkedin, ArrowUpRight, Check, Copy } from 'lucide-react';

const CONTACT_EMAIL = 'contact@enactusbitsp.org';
// FormSubmit relays the form to the inbox without a backend of our own.
// The inbox owner confirms the address once, from the activation email sent on the first submission.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const MAX_MESSAGE_LENGTH = 1000;
const ROTATE_EVERY_MS = 2500;

// Phrases cycled in the section heading
const talkingPoints = ['joining the team', 'a partnership', 'a project idea', 'a collaboration'];

// Quick picks that pre-fill the subject line and tailor the message prompt
const topics = [
  {
    label: 'Join the team',
    subject: 'I would like to join Enactus BITS Pilani',
    prompt: 'Tell us a bit about yourself and what you would like to work on...'
  },
  {
    label: 'Partner with us',
    subject: 'Partnership enquiry',
    prompt: 'Tell us about your organisation and how you would like to work together...'
  },
  {
    label: 'Pitch a project idea',
    subject: 'Project idea',
    prompt: 'Describe the problem you have spotted and your idea for solving it...'
  },
  {
    label: 'Something else',
    subject: '',
    prompt: 'Tell us more about your inquiry...'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [topicIndex, setTopicIndex] = useState<number | null>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((index) => (index + 1) % talkingPoints.length);
    }, ROTATE_EVERY_MS);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTopic = (index: number) => {
    setTopicIndex(index);
    setFormData({ ...formData, subject: topics[index].subject });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  const openMailApp = () => {
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // filled in by bots only
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[Website] ${formData.subject}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result || String(result.success) !== 'true') {
        throw new Error('Form relay rejected the message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTopicIndex(null);
      setTimeout(() => setSubmitStatus('idle'), 8000);
    } catch {
      // Keep what the visitor typed so they can retry or send it from their own mail app
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const channels = [
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@enactus.bitspilani',
      href: 'https://www.instagram.com/enactus.bitspilani/'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: 'Enactus BITS Pilani',
      href: 'https://in.linkedin.com/company/enactus-bppc'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'BITS Pilani, Rajasthan',
      href: 'https://www.google.com/maps/search/?api=1&query=BITS+Pilani+Rajasthan'
    }
  ];

  const inputClasses =
    'w-full px-4 py-3 bg-charcoal-800 border border-charcoal-500 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300';
  const tileClasses =
    'group flex items-center gap-4 p-5 bg-charcoal-700 rounded-xl border border-charcoal-500 hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300 text-left';

  return (
    <section id="contact" className="backdrop backdrop-dark py-20 overflow-hidden bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <div className="text-xl md:text-2xl text-gray-300 flex flex-wrap items-center justify-center gap-x-2">
            <span>Let's talk about</span>
            <span className="relative inline-flex h-9 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={talkingPoints[phraseIndex]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-semibold text-yellow-400 whitespace-nowrap"
                >
                  {talkingPoints[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-charcoal-700 rounded-2xl p-6 sm:p-8 border border-charcoal-500"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
            <p className="text-gray-400 mb-5">What would you like to talk about?</p>

            {/* Topic quick picks */}
            <div className="flex flex-wrap gap-2 mb-6">
              {topics.map((topic, index) => (
                <button
                  key={topic.label}
                  type="button"
                  onClick={() => handleTopic(index)}
                  aria-pressed={topicIndex === index}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    topicIndex === index
                      ? 'bg-yellow-400 text-charcoal-900 border-yellow-400'
                      : 'text-gray-300 border-charcoal-500 hover:border-yellow-400 hover:text-yellow-400'
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                className="mb-6 p-4 bg-yellow-400/10 border border-yellow-400/40 rounded-lg"
              >
                <p className="text-yellow-300">Message sent! We'll get back to you soon.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                role="alert"
                className="mb-6 p-4 bg-red-500/10 border border-red-500/40 rounded-lg"
              >
                <p className="text-red-300">
                  We couldn't send your message just now. Please try again, or{' '}
                  <button type="button" onClick={openMailApp} className="underline font-semibold">
                    send it from your email app
                  </button>
                  .
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hidden from people; bots that fill it in are ignored */}
              <input
                type="text"
                name="_honey"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <span className="text-xs text-gray-500">
                    {formData.message.length}/{MAX_MESSAGE_LENGTH}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={MAX_MESSAGE_LENGTH}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  placeholder={topicIndex === null ? 'Tell us more about your inquiry...' : topics[topicIndex].prompt}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-yellow-400 text-charcoal-900 py-3 px-6 rounded-lg font-semibold inline-flex items-center justify-center disabled:opacity-60 disabled:cursor-wait"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </form>
          </motion.div>

          {/* Other ways to reach us */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Email: click to copy */}
            <button type="button" onClick={handleCopyEmail} className={tileClasses}>
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-charcoal-900" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-lg font-semibold text-white">Email Us</h4>
                <p className="text-yellow-400 break-all">{CONTACT_EMAIL}</p>
              </div>
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-sm text-gray-400 group-hover:text-yellow-400">
                {emailCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {emailCopied ? 'Copied' : 'Copy'}
              </span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-5">
              {channels.map((channel) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tileClasses} sm:flex-col sm:items-start lg:flex-row lg:items-center xl:flex-col xl:items-start`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-charcoal-600 border border-charcoal-500 rounded-lg flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                    <channel.icon className="h-6 w-6 text-yellow-400 group-hover:text-charcoal-900" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold flex items-center gap-1">
                      {channel.title}
                      <ArrowUpRight className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yellow-400" />
                    </h4>
                    <p className="text-gray-400 text-sm">{channel.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map: muted until hovered so it sits with the dark theme */}
            <div className="flex-1 min-h-[16rem] rounded-xl overflow-hidden border border-charcoal-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4047879834744!2d75.58671331504076!3d28.357947902524616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912d52d53147fe1%3A0x37a820eff8b06bdb!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani!5e0!3m2!1sen!2sin!4v1629135702056!5m2!1sen!2sin"
                title="BITS Pilani on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full min-h-[16rem] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
