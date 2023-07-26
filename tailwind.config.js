/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        poppinsBold: ['var(--font-poppins-bold)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
