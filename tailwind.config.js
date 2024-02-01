/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my_gray: "#B9B4C7",
        my_blue: "#6C22A6",
        my_purple: "#400769",
        my_darkgray: "#A9A9A9",
        my_blueblack: "#352F44",
        my_lightgray: "#F0F0F0",
        my_pink1: "#F2BED1",
        my_pink2: "#FDCEDF",
        my_pink3: "#F8E8EE",
        my_pink4: "#F9F5F6",
        my_pink5: "#E6A4B4",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
