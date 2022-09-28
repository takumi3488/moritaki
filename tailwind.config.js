/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      fontFamily: {
        body: ['"M PLUS 1p"'],
      },
    },
    extend: {},
  },
  plugins: [],
};
