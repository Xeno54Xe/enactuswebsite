export interface TeamMember {
  name: string;
  role: string;
  department: string;
  year: string;
  // Path to a photo in public/team (e.g. '/team/devansh.jpg'); initials are shown when empty
  image: string;
  linkedin: string;
  email: string;
}

// Placeholders until each member's own email and LinkedIn profile are added
const PLACEHOLDER_EMAIL = 'contact@enactusbitsp.org';
const PLACEHOLDER_LINKEDIN = 'https://in.linkedin.com/company/enactus-bppc';

// Position-of-responsibility holders shown in the Team section. The President comes first.
export const porHolders: TeamMember[] = [
  {
    name: 'Vansh Dhillon',
    role: 'President',
    department: '',
    year: '',
    image: '',
    linkedin: PLACEHOLDER_LINKEDIN,
    email: PLACEHOLDER_EMAIL
  },
  {
    name: 'Omkar Thote',
    role: 'Head of Operations',
    department: '',
    year: '',
    image: '',
    linkedin: PLACEHOLDER_LINKEDIN,
    email: PLACEHOLDER_EMAIL
  },
  {
    name: 'Abhishek Patil',
    role: 'Director of Projects',
    department: '',
    year: '',
    image: '',
    linkedin: PLACEHOLDER_LINKEDIN,
    email: PLACEHOLDER_EMAIL
  },
  {
    name: 'Trizal Garg',
    role: 'Oasis Coordinator',
    department: '',
    year: '',
    image: '',
    linkedin: PLACEHOLDER_LINKEDIN,
    email: PLACEHOLDER_EMAIL
  },
  {
    name: 'Harsh Singh',
    role: 'Apogee Coordinator',
    department: '',
    year: '',
    image: '',
    linkedin: PLACEHOLDER_LINKEDIN,
    email: PLACEHOLDER_EMAIL
  },
  {
    name: 'Aviral Makan',
    role: 'Outreach Head',
    department: '',
    year: '',
    image: '',
    linkedin: PLACEHOLDER_LINKEDIN,
    email: PLACEHOLDER_EMAIL
  }
];
