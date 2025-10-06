/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 important
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
