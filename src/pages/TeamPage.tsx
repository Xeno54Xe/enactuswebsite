import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage: React.FC = () => {
  // Generate 30 team members
  const allTeamMembers = [
    {
      name: 'Devansh Bansal',
      position: 'President',
      department: 'Computer Science',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading the team with vision and passion for social change.',
      linkedin: '#',
      email: 'arjun@enactus.org',
      github: '#'
    },
    {
      name: 'Pranav Talreja',
      position: 'Vice President',
      department: 'Economics',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Strategic planning and project management expert.',
      linkedin: '#',
      email: 'priya@enactus.org'
    },
    {
      name: 'Kautabh Bansal',
      position: 'Project Director',
      department: 'Mechanical Engineering',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Overseeing all project implementations and community outreach.',
      linkedin: '#',
      email: 'rahul@enactus.org'
    },
    {
      name: 'Jayant Kapoor',
      position: 'Finance Head',
      department: 'Management',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing finances and ensuring sustainable project funding.',
      linkedin: '#',
      email: 'sneha@enactus.org'
    },
    {
      name: 'Aditya Birari',
      position: 'Technology Lead',
      department: 'Information Systems',
      image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Developing tech solutions for social impact projects.',
      linkedin: '#',
      email: 'vikram@enactus.org',
      github: '#'
    },
    {
      name: 'Krish',
      position: 'Marketing Head',
      department: 'Communication',
      image: 'https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Building brand awareness and community engagement.',
      linkedin: '#',
      email: 'anita@enactus.org'
    },
    {
      name: 'Ritambra Mehta',
      position: 'Operations Manager',
      department: 'Industrial Engineering',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Streamlining operations and ensuring project efficiency.',
      linkedin: '#',
      email: 'sanjay@enactus.org'
    },
    {
      name: 'Charvie',
      position: 'Research Head',
      department: 'Social Sciences',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading research initiatives and impact assessment.',
      linkedin: '#',
      email: 'kavya@enactus.org'
    },
    {
      name: 'Kavya Nair',
      role: 'Content Head',
      department: 'English Literature',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'kavya@enactusbitspilani.com'
    },
    {
      name: 'Rohan Joshi',
      role: 'Event Coordinator',
      department: 'Business Administration',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'rohan@enactusbitspilani.com'
    },
    {
      name: 'Neha Singh',
      role: 'Social Media Manager',
      department: 'Mass Communication',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'neha@enactusbitspilani.com'
    },
    {
      name: 'Aditya Rao',
      role: 'Technical Lead',
      department: 'Electronics Engineering',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'aditya@enactusbitspilani.com'
    },
    {
      name: 'Pooja Agarwal',
      role: 'Design Head',
      department: 'Architecture',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'pooja@enactusbitspilani.com'
    },
    {
      name: 'Siddharth Gupta',
      role: 'Logistics Head',
      department: 'Mechanical Engineering',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'siddharth@enactusbitspilani.com'
    },
    {
      name: 'Ishita Bansal',
      role: 'Partnership Manager',
      department: 'Economics',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'ishita@enactusbitspilani.com'
    },
    {
      name: 'Harsh Vardhan',
      role: 'Quality Assurance',
      department: 'Chemical Engineering',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'harsh@enactusbitspilani.com'
    },
    {
      name: 'Tanvi Sharma',
      role: 'Training Coordinator',
      department: 'Human Resources',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/3307758/pexels-photo-3307758.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'tanvi@enactusbitspilani.com'
    },
    {
      name: 'Aryan Khanna',
      role: 'Data Analyst',
      department: 'Statistics',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'aryan@enactusbitspilani.com'
    },
    {
      name: 'Divya Reddy',
      role: 'Environmental Lead',
      department: 'Environmental Science',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'divya@enactusbitspilani.com'
    },
    {
      name: 'Manish Tiwari',
      role: 'Innovation Head',
      department: 'Computer Science',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'manish@enactusbitspilani.com'
    },
    {
      name: 'Shreya Jain',
      role: 'Documentation Lead',
      department: 'Information Systems',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'shreya@enactusbitspilani.com'
    },
    {
      name: 'Varun Malhotra',
      role: 'Strategy Advisor',
      department: 'Management',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'varun@enactusbitspilani.com'
    },
    {
      name: 'Nidhi Agrawal',
      role: 'Health Initiative Lead',
      department: 'Pharmacy',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'nidhi@enactusbitspilani.com'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Rural Development Head',
      department: 'Agriculture',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'rajesh@enactusbitspilani.com'
    },
    {
      name: 'Sakshi Verma',
      role: 'Education Coordinator',
      department: 'Education',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'sakshi@enactusbitspilani.com'
    },
    {
      name: 'Deepak Yadav',
      role: 'Technology Coordinator',
      department: 'Information Technology',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'deepak@enactusbitspilani.com'
    },
    {
      name: 'Priyanka Singh',
      role: 'Women Empowerment Lead',
      department: 'Social Work',
      year: 'Final Year',
      image: 'https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'priyanka@enactusbitspilani.com'
    },
    {
      name: 'Akash Gupta',
      role: 'Youth Development Head',
      department: 'Psychology',
      year: 'Second Year',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'akash@enactusbitspilani.com'
    },
    {
      name: 'Meera Patel',
      role: 'Sustainability Coordinator',
      department: 'Environmental Engineering',
      year: 'Third Year',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'meera@enactusbitspilani.com'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-blue-400 transition-colors duration-300 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Complete <span className="text-yellow-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Meet all the passionate individuals who make Enactus BITS Pilani a force for positive change.
          </p>
        </motion.div>

        {/* Team Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allTeamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-charcoal-600 rounded-xl p-4 border border-charcoal-500 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl">
                {/* Member Image */}
                <div className="relative mb-4">
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gradient-to-r from-yellow-400 to-blue-500 group-hover:scale-105 transition-all duration-300"
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
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-yellow-400 font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-gray-400 text-xs mb-1">{member.department}</p>
                  <p className="text-gray-400 text-xs mb-3">{member.year}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;