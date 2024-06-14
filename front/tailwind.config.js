/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'sejong-crimson':'#c3002e',
        'sejong-gray':'#51626f'
      },
      fontFamily: {
        TimesNewRoman: ["Times New Roman"],
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        card : '200px 1fr',
      }
    },
  },
  plugins: [],
};
