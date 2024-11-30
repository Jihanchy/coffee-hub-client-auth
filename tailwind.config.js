/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        addCoffeeBanner: "url('/src/assets/more/11.png')",
        home: "url('/src/assets/more/1.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

