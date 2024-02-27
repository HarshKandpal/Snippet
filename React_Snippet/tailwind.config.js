/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#90AFC5',    // Custom primary color
        secondary: 'rgb(15,23,42)',  // border secondary color
        accent: 'rgb(15,15,15)',     // Custom accent color
        light:'#e5e5e5',
        textColor:'rgb(223,220,203)',
        tabsColor: 'rgb(22,22,24)'
      }
    },
  },
  plugins: [],
}

