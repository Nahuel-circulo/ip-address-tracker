/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      colors: {
        'dark-gray': 'hsl(0, 0%, 59%)',
        'very-dark-gray': 'hsl(0, 0%, 17%)'
      },
      backgroundImage: {
        'hero-mobile': "url('/images/pattern-bg-mobile.png')",
        'hero-desktop': "url('/images/pattern-bg-desktop.png')"
      }
    },
    plugins: []
  }
}
