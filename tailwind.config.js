/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './utills/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './services/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: `Roboto Mono, monospace`,
    },
    extend: {
      
    },
  },
  plugins: [],
};
