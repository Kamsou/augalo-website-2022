module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1024px',
      },
      fontFamily: {
        'primary': ['Subjectivity', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: '#2CBBB0',
        secondary: '#696969',
      },
    },
  },
  plugins: [],
}
