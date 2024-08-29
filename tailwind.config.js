/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brawn: {
          white: "#FEFFFF",
          gray: "#20303F",
          yellow: "#B8FD6E",
          black: "#142127",
          red: "#BD2E40",
        },
      },
    },
  },
  plugins: [],
};
