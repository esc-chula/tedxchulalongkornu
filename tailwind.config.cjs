const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			'screen': ['96px', {fontWeight: '700'}],
			'heading': ['61px', {fontWeight: '700'}],
			'subheading': ['49px', {fontWeight: '600'}],
			'title': ['31px', {fontWeight: '500'}],
			'body': ['24px', {fontWeight: '400'}],
			'nav': ['16px', {fontWeight: '500'}]
		},
		extend: {
			colors: {
				TED: {
					red: '#FF2B29',
					yellow: '#E8FA52',
					purple: '#754DF2',
					pink: '#EA76E7',
		  		},
			},
			typography: (theme) => ({
				DEFAULT: {
				  css: {
					//screen
					h1: {
					  fontSize: '96px',
					  fontWeight: '700',
					  fontFamily: `${theme('fontFamily.poppins')}`
					},
					//heading
					h2: {
					  fontSize: '61px',
					  fontWeight: '700',
					  fontFamily: `${theme('fontFamily.display')}`
					},
					//subheading
					h3: {
					  fontSize: '49px',
					  fontWeight: '600',
					  fontFamily: `${theme('fontFamily.display')}`
					},
					//title
					h4: {
					  fontSize: '31px',
					  fontWeight: '500',
					  fontFamily: `${theme('fontFamily.display')}`
					},
					// body navitem button
					p: {
					  fontFamily: `${theme('fontFamily.body')}`
					}
				  }
				},
			}),
		},
		fontFamily: {
			poppins: ["Poppins", ...defaultTheme.fontFamily.sans,],
			display: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
			body: ["IBM Plex Sans Thai Looped", ...defaultTheme.fontFamily.sans],
		  },
	},
	plugins: [require('@tailwindcss/typography'),],
}
