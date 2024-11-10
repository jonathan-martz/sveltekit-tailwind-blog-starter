export const config = {
	title: 'Jonathan Martz Softwareentwicklung',
	author: 'Jonathan Martz',
	headerTitle: 'Jonathan Martz \n Softwareentwicklung',
	description: 'Jonathan Martz Blog, created with Sveltekit and Tailwind.css',
	language: 'de-de',
	theme: 'dark', // system, dark or light
	domain: 'https://www.jonathan-martz.de',
	siteUrl: 'https://www.jonathan-martz.de',
	siteRepo: 'https://github.com/jonathan-martz/sveltekit-tailwind-blog-starter',
	siteLogo: '/jmse-logo.svg',
	image: 'https://cdn.jmse.cloud/avatar-2024.png',
	email: 'info@jonathan-martz.de',
	github: 'https://github.com/jonathan-martz',
	twitter: '',
	facebook: '',
	youtube: '',
	linkedin: 'https://www.linkedin.com/company/jonathan-martz-softwareentwicklung/',
	locale: 'de-DE',
	primaryColor: '#1f6fed',

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	newsletter: 'mailchimp',

	multiuser: true
};

export const user = {
	name: 'Jonathan Martz',
	// avatar value can be removed for image
	avatar: 'https://cdn.jmse.cloud/avatart-2024.png',
	// twitter value can be removed for no link to twitter
	twitter: ''
};

export const navLinks = [
	{ href: '/über-uns', title: 'Über uns' },
	{ href: '/projekte', title: 'Projekte' },
	{ href: '/blog', title: 'Blog' }
];

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
};

// supported providers: giscus, utterances
export const comment = {
	provider: 'giscus',
	giscus: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://giscus.app/
		repo: 'akiarostami/sveltekit-tailwind-blog-starter',
		reposId: 'R_kgDOIen4kw',
		category: 'Sample Site Comments',
		categoryId: 'DIC_kwDOIen4k84CS9tX',
		mapping: 'pathname', // supported options: pathname, url, title
		reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
		// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
		metadata: '0',
		// theme example: light, dark, dark_dimmed, dark_high_contrast
		// Place the comment box above the comments. options: bottom, top
		inputPosition: 'bottom',
		// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
		lang: 'en',
		dataStrict: '0',
		loading: 'lazy',
		// theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
		// light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
		theme: 'light',
		// theme when dark mode
		darkTheme: 'dark',
		themeURL: ''
	},
	utterances: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://utteranc.es/
		repo: 'akiarostami/sveltekit-tailwind-blog-starter',
		issueTerm: 'pathname', // supported options: pathname, url, title
		label: 'Comment 💬', // label (optional): Comment 💬
		// theme example: github-light, github-dark, preferred-color-scheme
		// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
		theme: 'github-light',
		// theme when dark mode
		darkTheme: 'github-dark'
	}
};
