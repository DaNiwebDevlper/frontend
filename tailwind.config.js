/** @type {import('tailwindcss').Config} */
import { Courgette } from 'next/font/google';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nanum: ['Nanum Pen Script', 'sans-serif']
      },


      colors: {
        primary: '#007dfc'
      }
    },
  },
  plugins: [],
};
