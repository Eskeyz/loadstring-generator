/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // import daisyUI
  plugins: [require("daisyui")],

  // config daisyUI
  daisyui: {
    themes: ["light", "dark"],
  }
}