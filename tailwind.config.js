/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: ['"Satoshi"', ...defaultTheme.fontFamily.sans],
        ClashDisplay: ['"Clash Display"', ...defaultTheme.fontFamily.sans],
        Bellefair: ['"Bellefair"'],
        Poppins: ['"Poppins"'],
        Baskervville: ['"Baskervville"'],
        STIX: ['"STIX Two Text"'],
        Inter: ['"Inter"'],
      },
    },
  },
  plugins: [],
};
