module.exports = {
  email: 'wali6985@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/SABERGLOW',
    },

    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sardarwaliullah/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/saberglow',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sardarwaliullah/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SardarWaliUllah',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    mimirGreenDarkest: '#062925',
    mimirGreenDarker: '#044A42',
    mimirGreenDark: '#3A9188',
    mimirGreen: '#B8E1DD',
    mimirWhite: '#F1F2EB',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
