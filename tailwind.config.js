/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	theme: {
		extend: {
			boxShadow: {
				kbd: '1px 1px 1px #777'
			},
			padding: {
				contentpadding: '300px'
			},
			listStyleType: {
				roman: 'upper-roman'
			},
			minHeight: {
				footer: '5rem',
				full: '100vh'
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				third: 'var(--color-third)',
				dark: 'var(--color-dark)',
				light: 'var(--color-light)',
				link: 'var(--color-link)'
			}
		}
	},
	variants: {
		extend: {
			backgroundColor: ['hover', 'focus']
		}
	},
	plugins: []
};
