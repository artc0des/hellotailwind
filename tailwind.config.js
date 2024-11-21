/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        artBackground: 'hsl(200, 13.43%, 13.14%)',
        artHeader: 'hsl(203.48, 25%, 36.08%)',
        artTextColor: 'hsl(39.47, 89.06%, 74.9%)',
        artHighlight: 'hsl(39.06, 94.38%, 48.82%)',
        artBorder: 'hsl(204, 14.29%, 6.86%)',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        alata: ['Alata'],
        nothing: ['Nothing You Could Do']
      },
      letterSpacing: {
        widest: '0.3em'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

