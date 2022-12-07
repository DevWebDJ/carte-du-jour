/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      satoshi: "Satoshi-Variable",
      poppins: "Poppins-Variable",
    },
    extend: {
      backgroundImage: {
        texture: "url('./assets/topo.jpg')",
      },
      colors: {
        beige: "#fff4e4",
        slightWhite: "#f0f6ee",
        primary: "#C99601",
        secondary: "#225C39",
      },
    },
  },
  plugins: [],
};
