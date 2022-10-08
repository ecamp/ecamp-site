const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const ecampBlue = {
  50: "#ecf6fe",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#64b5f6",
  400: "#60a5fa",
  500: "#007cdf",
  600: "#0068df",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#00143c",
};

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: ecampBlue,
        secondary: colors.sky,
        accent: colors.orange,
      },
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      screen: {
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  darkMode: "media",
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
