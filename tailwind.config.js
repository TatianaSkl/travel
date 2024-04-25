/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui-kit/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        s: '480px',
        md: { max: '767px' },
        m: '768px',
        l: '1280px',
        xl: '1440px',
      },
      colors: {
        red: '#FF5757',
      },
    },
  },
  plugins: [],
};
