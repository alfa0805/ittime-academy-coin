module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    { pattern: /from-\[#.*\]/ },
    { pattern: /to-\[#.*\]/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
