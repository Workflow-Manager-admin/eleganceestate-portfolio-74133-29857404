module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#17415e",
        secondary: "#bcd4e6",
        accent: "#fbb040",
        dark: "#121e27"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
