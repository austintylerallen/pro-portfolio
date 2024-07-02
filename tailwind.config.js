module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        offwhite: '#f0f0f0', // Custom color for off-white
        'gray-800': '#2d2d2d', // Custom color for dark gray
        'gray-900': '#1a1a1a', // Custom color for darker gray
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Roboto font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
