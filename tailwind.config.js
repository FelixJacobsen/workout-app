/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue", "./index.html"],
  theme: {
    extend: {
      colors: {
        "light-green": "#44ba9f",
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      flex: {
        1: "1 1 0%",
        2: "2 2 0%",
      },
      container: {
        center: true,
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
    plugins: [],
  },
};
