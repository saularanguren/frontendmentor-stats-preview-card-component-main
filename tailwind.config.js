/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    colors: {
      'dark-navy-blue': '#0A0C1C',
      'midnight-blue': '#1B1937',
      'violet-effect': 'rgba(171, 92, 219, 0.7511)',
      'violet-light': '#AB5CDB',
      'white': '#ffffff',
      'white-paragraph': 'rgba(255, 255, 255, 0.75)',
      'white-statistics': 'rgba(255, 255, 255, 0.60)',
    },
    extend: {
      width: {
        '327': '20.438rem',
        '1110': '69.375rem',
        '540': '33.75rem',
        '264': '16.5rem',
        '403': '25.1875rem',
        '374': '23.375rem',
        '83': '5.1875rem',
        '79': '4.9375rem',
        '66': '4.125rem',
      },
      height: {
        '780': '48.75rem',
        '446': '27.875rem',
        '100': '6.25rem',
        '29': '1.8125rem',
        '25': '1.5625rem',
        '88': '5.5rem',
        '75': '4,6875',
      },
      boxShadow: {
        'main': '0 1.25rem 1.25rem -0.625rem hsla(233, 28%, 13%, 0.203)',
      },
      backgroundImage: {
        'mobile': "url('../../assets/images/image-header-mobile.jpg')"
      },
      fontSize: {
        '28': '1.75rem',
        '15': '0.9375rem',
        '24': '1.5rem',
        '12': '0.75rem',
        '36': '2.25rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif'],
      },
      lineHeight: {
        '25': '1.563rem',
        '44': '2.75rem',
      },
      letterSpacing: {
        '1': '0.0625rem',
      },
      margin: {
        '25': '1.5625rem',
      },
      gap: {
        '25': '1.5625rem',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
