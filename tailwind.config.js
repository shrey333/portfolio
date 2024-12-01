const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      textShadow: {
        'metallic-light': '1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(255, 255, 255, 0.5)',
        'metallic-dark': '1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-metallic-light': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(255, 255, 255, 0.5)',
        },
        '.text-shadow-metallic-dark': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.1)',
        },
      });
    },
  ],
};
