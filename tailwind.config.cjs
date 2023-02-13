/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			offwhite: '#F1FAEE',
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
			widest: '.3em'
		},
		extend: {}
	},
	plugins: []
};
