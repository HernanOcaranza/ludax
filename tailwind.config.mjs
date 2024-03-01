/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'greenL': '#74AA50',
				'blackL': '#222223',
				'whiteL': '#F2EFE6', 
			}
		},
	},
	plugins: [],
}
