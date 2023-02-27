/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F91",
        secondary: "#A2798F",
        tertiary: "#7A4161",
        quaternary: "#32222B",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
