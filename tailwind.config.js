/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './.rnstorybook/**/*.{js,ts,jsx,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
