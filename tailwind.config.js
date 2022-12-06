/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('./assets/topo.jpg')",
      },
      colors: {
        beige: "#fff4e4",
        slightWhite: "#f0f6ee",
      },
    },
  },
  plugins: [],
};
