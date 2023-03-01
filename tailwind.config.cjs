/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: '#0096D7',
			},
			maxWidth: {
				'container': '1350px'
			}
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}
