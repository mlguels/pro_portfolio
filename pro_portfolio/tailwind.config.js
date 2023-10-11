/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ["var(--font-poppings)"],
      },
    },
    colors: {
      "primary-dark": "#0252CD",
      "primary-light": "#428DFF",
      "white-light": "#6F74A7",
      "main-bg": "#F3F8FF",
      "main-black": "#151E2C",
      morent: "#416CEA",
      hipnode: "#FF6934",
      input: "#CCE1FF",
      black: "#192333",
    },
  },
  plugins: [],
  darkMode: "class",
};
