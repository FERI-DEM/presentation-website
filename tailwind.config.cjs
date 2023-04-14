/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: '#0096D7',
				yellow: '#FFD600',
				'dark-blue': '#0981B5',
				'light-gray': '#F9F8F7',
			},
			maxWidth: {
				'container': '1300px'
			},
			keyframes: {
				move: {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(0px, 10px)' },
					'50%': { transform: 'translate(15px, 10px)' },
					'75%': { transform: 'translate(15px, 0)' },
					'100%': { transform: 'translate(0, 0)' },
				}
			},
			animation: {
				'panel': 'move 4s ease-in-out infinite',
			},
		},
		container: {
			center: true,
			padding: '2rem',
		},
	},
	plugins: [],
}
