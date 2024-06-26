import { nextui } from '@nextui-org/react'

export const primaryColor = '#34B1E6'

/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',

		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: primaryColor,
				'bg-light': '#F4FAFC',
				'sidebar-gray': '#888888',
				'sidebar-active': '#154C63',
				'light-black': '#333333',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: primaryColor,
					},
				},
			},
		}),
	],
}
