/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        black: "#2c2c2c",
        gray: "#f2f2f2",
        green: "#08fdd8",
        purple: "#3f2855",
        g1: "rgb(98, 0, 234)",
        g2: "rgb(236, 64, 122)",
        g3: "rgb(253, 216, 53)",
      },
    },
  },
  plugins: [],
};
