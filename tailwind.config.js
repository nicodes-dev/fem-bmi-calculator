/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue-500': '#345ff6',
        'primary-blue-900': '#253347',
        'primary-blue-700': '#5f6f86',
        'neutral-500': '#D8E2E7',
        'neutral-400': '#d9e3e8',
        'neutral-300': '#d7e7fe',
        'neutral-200': '#d7fbfe',
        'neutral-100': '#ffffff',
      },
    },
    screens: {
      sm: '500px',
      // => @media (min-width: 640px) { ... }
      md: '680px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
