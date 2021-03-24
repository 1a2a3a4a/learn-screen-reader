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
        
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}