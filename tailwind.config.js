/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily : {
      itc : ["ITC" ]
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        golden : '#FFD700'
      },
    },
  },
  plugins: [],
};
