/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			offwhite: '#F1FAEE',
			opacityblue: 'rgba(69, 123, 157, 0.7)',
			candyblue: '#DEF2E9',
			lightblue: '#A8DADC',
			blue: '#457B9D',
			darkblue: '#1D3557',
			red: '#E63946'
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			inter: ['Inter', 'sans-serif']
		},
		letterSpacing: {
			wider: '.1em',
			widest: '.3em'
		}
	},
	extend: {},
	plugins: []
};
