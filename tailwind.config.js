/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A3FF',
          dark: '#0082CC'
        },
        dark: {
          DEFAULT: '#0A0A0F',
          lighter: '#121218',
          card: '#1A1A23'
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      transformOrigin: {
        'center-right': 'center right',
      },
      rotate: {
        'y-12': '12deg',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective': {
          'perspective': '1000px',
        },
        '.rotate-y-12': {
          'transform': 'rotateY(12deg)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        }
      }
      addUtilities(newUtilities)
    }
  ]
};