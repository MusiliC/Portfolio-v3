/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#001253",
        "primary-500": "#C1ECE4",
        "secondary-100": "#326E6C",
        "secondary-500": "#FFFBEB",
        "primary-two-100": "#F9F7F0",
        "primary-two-300": "#326E6C",
        "secondary-two-100": "#FC4F00",
      },
      
    },
  },
  plugins: [],
};
