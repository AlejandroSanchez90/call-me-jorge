import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Tungsten: ['Tungsten', 'sans-serif'],
        Sintony: ['Sintony', 'sans-serif'],
      },
      colors: {
        sacbeOrange: '#FFA500',
        sacbeBlue: '#114550',
        sacbeBeige: '#FFF6D2',
      },
    },
  },
  plugins: [],
};
export default config;