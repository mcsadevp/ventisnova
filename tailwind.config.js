/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { customGreen: 'rgba(16, 162, 116, 1)', customDarkGreenTransparent: 'rgba(23, 72, 57, 0)' },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(16, 162, 116, 1), rgba(23, 72, 57, 0))',
      },
    },
  },
  plugins: [],
};
