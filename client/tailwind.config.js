/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        LightPrimaryColor: "#1A73E8",
        LightSecondaryColor: "#34A853",
        LightBackgroundColor: "#FFFFFF",
        LightTextColor: "#202124",
        LightAccentColor: "#FBBC05",
        DarkPrimaryColor: "#8AB4F8",
        DarkSecondaryColor: "#68D391",
        DarkBackgroundColor: "#202124",
        DarkTextColor: "#E8EAED",
        DarkAccentColor: "#F4B400",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
