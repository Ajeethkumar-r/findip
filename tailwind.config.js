module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    backgroundImage: {
      pattern: "url('../public/images/pattern.png')",
      markerIcon: "url('../public/images/marker.svg')",
    },
    maxWidth: {
      mw: '1440px',
    },
    fontWeight: {
      reg: 400,
      sreg: 500,
      breg: 700,
    },

    extend: {},
  },
  plugins: [],
};
