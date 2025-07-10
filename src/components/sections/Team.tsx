import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Devansh Bansal',
      role: 'President',
      department: 'Electrical Engineering',
      year: 'Third Year',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHVnK6GctPWBg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727086809025?e=1755129600&v=beta&t=JXB45ayQrS7XxjZfhBPx5tvwx8cj75rtlwwrATJaIk8',
      linkedin: 'https://www.linkedin.com/in/devansh-bansal-82b729250/',
      email: 'arjun@enactusbitspilani.com'
    },
    {
      name: 'Pranav talreja',
      role: 'Managing Director',
      department: 'Chemical Engineering + MS Chemistry',
      year: 'Third Year',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGT2HwsIiAL2Q/profile-displayphoto-shrink_100_100/B56ZcyRWT7GsAc-/0/1748895100479?e=1755129600&v=beta&t=UDbSTXjNWVG1KlElFbkcv1R1ng14XtNQflCJ0yuHlZk',
      linkedin: 'https://www.linkedin.com/in/pranav-talreja-506a49216/',
      email: 'pranav@enactusbitspilani.com'
    },
    {
      name: 'Kaustubh Bansal',
      role: 'Head of Projects',
      department: 'Civil Engineering',
      year: 'Third Year',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQF75tgLbHpX4w/profile-displayphoto-shrink_400_400/B56ZXhiNt8GoAg-/0/1743245603988?e=1755129600&v=beta&t=Ur4XhhqCZp8YSccuHkRFG8UYmpYH0lYUjYmUvaysyXM',
      linkedin: 'https://www.linkedin.com/in/kaustubh-bansal/',
      email: 'rahul@enactusbitspilani.com'
    }
  ];

  const developers = [
    {
      name: 'Vansh Dhillon',
      role: 'Lead Developer',
      department: 'CSE + MS Economics',
      year: 'First Year',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGLKSLEiHrtlg/profile-displayphoto-shrink_800_800/B4DZQUEJftGgAc-/0/1735503420537?e=1755129600&v=beta&t=UJ3oOa4bWk8fw3-qXVIB28jG6Odh998FsJnf81IJinY',
      linkedin: 'https://www.linkedin.com/in/vanshdhillon/',
      email: 'f20240923@pilani.bits-pilani.ac.in'
    },
    {
      name: 'Harsh Singh',
      role: 'Frontend Developer',
      department: 'Computer Science',
      year: 'First Year',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFKzKzIF3yhRQ/profile-displayphoto-shrink_800_800/B4DZb23_W6G8Ag-/0/1747898596017?e=1755129600&v=beta&t=pg7BcSJTDmOdJ7SnnjkjArjnoHxhqq572LMcaFbuxHk',
      linkedin: 'https://www.linkedin.com/in/harsh-singh-4a6600323',
      email: 'harssh60@gmail.com'
    }
  ];

  const renderMemberCard = (member: any, index: number) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-charcoal-600 rounded-2xl p-6 border border-charcoal-500 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl">
        {/* Member Image */}
        <div className="relative mb-6">
          <motion.div
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-orange-500 group-hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Member Info */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-yellow-400 font-medium mb-2">{member.role}</p>
          <p className="text-gray-400 text-sm mb-1">{member.department}</p>
          <p className="text-gray-400 text-sm mb-4">{member.year}</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <motion.a
              href={member.linkedin}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={`mailto:${member.email}`}
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="team" className="py-20 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Behind every successful project is a dedicated team of passionate individuals 
            working tirelessly to create positive change in our communities.
          </p>
        </motion.div>

        {/* Team Grid - Only 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => renderMemberCard(member, index))}
        </div>

        {/* View Entire Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-20"
        >
          <Link to="/team">
            <motion.button
              className="bg-yellow-400 text-charcoal-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Entire Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Meet the Developers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-yellow-400">Developers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The talented developers who brought this website to life and continue to enhance our digital presence.
          </p>
        </motion.div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((developer, index) => renderMemberCard(developer, index))}
        </div>
      </div>
    </section>
  );
};

export default Team;