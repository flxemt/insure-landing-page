/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        dark: '#2C2830',
        'dark-gray': '#837D88',
        'dark-purple': '#2D2641',
        'light-blue': '#96A9C6',
        'light-gray': '#FAFAFA',
        pink: '#C396C6',
        line: '#DADADA'
      }
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      headings: ['DM Serif Display', 'sans-serif']
    },
    fontSize: {
      h1: '4.5rem', // 72px,
      h2: '3.5rem', // 56px
      h3: '3rem', // 48px
      h4: '2.5rem', // 40px
      h5: '1.75rem', // 28px
      body: '1rem' // 16px
    },
    lineHeight: {
      h1: '4rem', // 64px,
      h2: '3.5rem', // 56px
      h3: '3rem', // 48px
      h4: '2.5rem', // 40px
      h5: '2.375rem', // 38px
      body: '1.625rem' // 26px
    },
    letterSpacing: {
      h1: '-1px',
      h5: '-0.39px',
      sm: '-0.67px',
      md: '1.5px'
    },
    backgroundImage: {
      'pattern-intro-left-mobile': 'url("/bg-pattern-intro-left-mobile.svg")',
      'pattern-intro-left-desktop': 'url("/bg-pattern-intro-left-desktop.svg")',
      'pattern-intro-right-mobile': 'url("/bg-pattern-intro-right-mobile.svg")',
      'pattern-intro-right-desktop': 'url("/bg-pattern-intro-right-desktop.svg")',
      'pattern-how-we-work-mobile': 'url("/bg-pattern-how-we-work-mobile.svg")',
      'pattern-how-we-work-desktop': 'url("/bg-pattern-how-we-work-desktop.svg")',
      'pattern-footer-mobile': 'url("/bg-pattern-footer-mobile.svg")',
      'pattern-footer-desktop': 'url("/bg-pattern-footer-desktop.svg")',
      'pattern-mobile-nav': 'url("/bg-pattern-mobile-nav.svg")'
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
