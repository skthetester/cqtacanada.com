/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626', // red-600
        secondary: '#6b7280', // gray-500
        accent: '#f3f4f6', // gray-100
        'canada-red': '#cc0000', // Rogers red
      },
    },
  },
  plugins: [],
}