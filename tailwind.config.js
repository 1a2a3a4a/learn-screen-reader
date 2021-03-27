// tailwind.config.js
module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        kbd: '1px 1px 1px #777'
      },
      padding:{
        contentpadding:'300px'
      },
      listStyleType: {
        roman: 'upper-roman',
      },
      minHeight: {
        'footer': '5rem',
        
       },
       colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        third: 'var(--color-third)',
        dark: 'var(--color-dark)',
        light:'var(--color-light)',
        link: 'var(--color-link)',
      }
    },
  },
  variants: {
       extend: {
        backgroundColor: ['hover', 'focus'],
      }
  },
  plugins: [],
}