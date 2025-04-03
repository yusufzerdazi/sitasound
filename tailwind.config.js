import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '1000': '1000px',
        '800': '800px',
        '600': '600px',
      }
    },
  },
  plugins: [flowbite.plugin()],
};
