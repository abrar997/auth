/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        unique: "'Patrick Hand ', cursive",
      },
      colors: {
        main: "#E3E3E3",
        primary: "#263238",
        secondary: "#665010",
        label: "#666363",
      },
    },
  },
  plugins: [],
};
