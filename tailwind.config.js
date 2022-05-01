module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1000px',
        'xl': '1330px',
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
