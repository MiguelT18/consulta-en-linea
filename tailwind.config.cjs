/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#3761B0",
        "light-blue": "#6EA7D6",
        "cream-blue": "#AFCAE3",
        "dark-gray": "#3E3E3E",
        "cream-white": "#E9F4FC",
        "hover-light-blue": "#3D90D5",
      },
    },
  },
  plugins: [],
};
