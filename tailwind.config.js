module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: "'Poppins', system-ui, sans-serif",
    },
    extend: {
      colors: {
        dark: "#393E41",
        primary: "#D3D0CB",
        secondary: "#587B7F",
        accent: "#B66FA5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
