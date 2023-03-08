module.exports = {
	globDirectory: 'public/',
	globPatterns: ['**/*.{js,css,png,jpg}', 'offline.html'],
	swSrc: 'public/sw-base.js',
	swDest: 'public/service-worker.js',
	globIgnores: [
		'../workbox-cli-config.js',
		'storage/**',
		'theme/**',
		'images/**',
		'files/**',
		'js/echarts.js',
	],
	injectionPoint: "injectionPoint",
	maximumFileSizeToCacheInBytes: 7000000,
};