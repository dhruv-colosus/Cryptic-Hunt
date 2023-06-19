/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {
      background: "#0B0B0B",
      white: "#FFFFFF",
      main: "#00C29",
      black: "#000000",
    },
    fontFamily: {
      heading: ["var(--font-autom)"],
      sub: ["var(--font-fira-code)"],
      button: ["var(--font-upheaval)"],
      montserrat: ["var(--font-montserrat)"],
      minecraftia: ["var(--font-minecraftia)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#00C29A",
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'fira-code-2': ['Fira Code Medium', 'monospace'],
        'Autom': ['Autom', 'sans-serif'],
        'Minecraftia': ['Minecraftia', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
