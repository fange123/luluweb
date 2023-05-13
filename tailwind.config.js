// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'buy-bg': '#11171e',
        'buy-button': '',
      }),
      spacing: {
        120: '30rem',
        150: '40rem',
        180: '50rem',
        200: '60rem',
        220: '70rem',
      },
      height: {
        120: '30rem',
      },
      width: {
        120: '30rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      keyframes: {
        round: {
          '50%': {
            backgroundColor: '#fff',
            boxShadow: '0 0 30px #fff',
          },
        },
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      animation: {
        round: 'round 1s ease-in-out infinite',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
      flex: {
        1: '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        inherit: 'inherit',
        none: 'none',
        2: '2 2 0%',
        3: '3 3 0%',
      },
      rotate: {
        360: '360deg',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
