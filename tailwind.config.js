/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { customGreen: 'rgba(16, 162, 116, 1)', customDarkGreenTransparent: 'rgba(23, 72, 57, 0)', customDarkGreen: '#1f332d', customLightGreen: 'rgba(16, 162, 116, 1)', customFormGreen: '#122C24', customDarkerGreen: ' #1f332d' },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(16, 162, 116, 1), rgba(23, 72, 57, 0))',
      },
      screens: {
        'custom-xl': '1100px', // Custom breakpoint for 900px
      },
    },
  },
  plugins: [],
};
