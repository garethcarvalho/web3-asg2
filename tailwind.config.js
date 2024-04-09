/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../img/karo-kujanpaa-TSoUMY6mJI8-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}

