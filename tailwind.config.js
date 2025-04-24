/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      backgroundColor: "#F4F7F9",
    },
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1024px" },
      md: { max: "750px" },
      sm: { max: "380px" },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};
