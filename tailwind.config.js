module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Update from 'purge' to 'content'
  darkMode: 'media', // or 'class', remove 'false' as it behaves the same as 'media'
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
