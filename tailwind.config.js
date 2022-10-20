/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/*.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        myskills: '#23645a'
      },
      spacing: {
        '15': '3.75rem'
      }
    },
  },
  plugins: [],
}

