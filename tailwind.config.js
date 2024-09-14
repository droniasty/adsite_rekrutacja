/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MyBlack: '#282828',
        MyWhite: '#FFFFFF',
        MyGrey:  '#F7F7F7',
        TextBlue:'#0147FF',
        TextBlack:'#000000',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        robotoFlex: ['"Roboto Flex"', 'sans-serif'],
      },
      fontSize: {
        'custom-size': '76.29px',
      },
      lineHeight: {
        'custom-line-height': '83.92px',
      },
      letterSpacing: {
        'custom-spacing': '-0.04em',
      },
    },
  },
  plugins: [],
}

