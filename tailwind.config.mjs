/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-nav': 'repeat(auto-fit, minmax(260px, 1fr))',
			},
			backgroundImage: {
				'model-y': "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png')",
				'model-3': "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg')",
				'model-x': "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop.jpg')",
				'model-s': "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg')",
				'model-cybertruck': "url('https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg')",
				'solar-panels': "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop')",
				'solar-roof': "url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global')",
				'powerwall': "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg')",
				'accessories':"url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg')",
			},
		},
	},
	plugins: [],
}
