/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'atheme1': '#E4C59E',
        'atheme2': '#AF8260',
        'atheme3': '#803D3B',
        'atheme4': '#322C2B',
      },
      fontFamily: {
        itim: ["Itim", "cursive"],
        "pixelify-sans": ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
