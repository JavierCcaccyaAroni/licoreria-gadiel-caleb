/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "color01": "#0F0F0F",
        "color02": "#232D3F",
        "color03": "#005B41",
        "color04": "#008170",
      },
    },
  },
  plugins: [],
}