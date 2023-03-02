/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#be8d8a",

          secondary: "#a1afb7",

          accent: "#A9124C",

          neutral: "#211B23",

          "base-100": "#c2c5c1",

          info: "#97CBE7",

          success: "#5ADDB1",

          warning: "#fbbf24",

          error: "#FB0E31",
        },
      },
    ],
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#FF6F91",
  //       secondary: "#A2798F",
  //       tertiary: "#7A4161",
  //       quaternary: "#32222B",
  //     },
  //   },
  // },
  plugins: [require("daisyui")],
  darkMode: "class",
};
