/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#10B981", // emerald-500
          dark: "#065F46",  // emerald-800
        }
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: [],
};
