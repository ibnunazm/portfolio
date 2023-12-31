/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#2563eb',
        secondary: '#475569',
        dark: '#0f172a',
      },
      screens:{
        'sm': '390px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

