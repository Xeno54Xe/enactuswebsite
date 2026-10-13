import colors from 'tailwindcss/colors';

// Enactus yellow scale: 400 is the brand colour, 600/700 are for text and icons on light backgrounds
const brandYellow = {
  ...colors.yellow,
  300: '#FFD666',
  400: '#FFC222',
  500: '#EFAE00',
  600: '#B98300',
  700: '#8A6100',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Soft off-white instead of pure white
        white: '#F8F5EE',
        // Warm near-blacks for dark sections
        charcoal: {
          900: '#0F0E0C',
          800: '#161512',
          700: '#1E1C18',
          600: '#26241F',
          500: '#39362E',
        },
        // Warm neutrals; 50-200 are the cream tones used for light sections
        gray: {
          ...colors.stone,
          50: '#F6F3EA',
          100: '#EEE9DC',
          200: '#E2DCCB',
        },
        // Card surface on light sections
        paper: '#FFFDF7',
        yellow: brandYellow,
        // Alias so existing gold-* classes resolve to the same yellow
        gold: brandYellow,
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(255, 194, 34, 0.35)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #FFC222, #EFAE00)',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
