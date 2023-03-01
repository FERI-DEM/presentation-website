/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: '#0096D7',
				yellow: '#FFD600',
				'dark-blue': '#0981B5',
			},
			maxWidth: {
				'container': '1300px'
			}
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [],
}
