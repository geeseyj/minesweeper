/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // gColor stands for "game" color
      colors: {
      'gBlue': '#0000ff',
      'gRed': '#ff0000',
      'gGreen': '#008000',
      'gMaroon': '#800000',
      'gNavy': '#000080',
      'gLightGray': '#c6c6c6',
      'gDarkGray': '#808080',
      'white': '#ffffff',
      'gTeal': '#008080',
      'black': '#000000',
    }},
  },
  plugins: [],
};

