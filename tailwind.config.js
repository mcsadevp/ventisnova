/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(16, 162, 116, 1)',
        customDarkGreenTransparent: 'rgba(23, 72, 57, 0)',
        customDarkGreen: '#1f332d',
        customLightGreen: 'rgba(16, 162, 116, 1)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #174839, #44A385)', // Your custom gradient
      },
    },
  },
  plugins: [],
};
