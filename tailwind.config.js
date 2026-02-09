import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#04364A",
          primary: "#176B87",
          secondary: "#64CCC5",
          light: "#DAFFFB",
          surface: "#F0FDFA", // Slightly cleaner/lighter background
        }
      }
    },
  },
  plugins: [flowbite],
};
