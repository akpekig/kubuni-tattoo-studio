/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA700",
        secondary: "#2B2B2B",
        tertiary: "#F5F5F5",
      },
      keyframes: {
        "slide-right": {
          "0%": {
            transform: "translateX(25%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-right": "slide-right 500ms cubic-bezier(0,.71,.37,1)",
      },
    },
  },
  plugins: [],
};
