/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*", ],
  theme: {
    extend: {},
    screens: {
      xl: { max: '1440px' },
      lg: { max: '1024px' },
      md: { max: '750px' },
      sm: { max: '380px' },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
