importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);
// workbox.setConfig({ modulePathPrefix: "workbox-v5.1.3/" });

const precacheManifest = [{"revision":"53b466be30a2e0d88edade7eeb6adbb5","url":"css/app.css"},{"revision":"da80a1f1dafd1a979172ab8a701b4089","url":"js/276.js"},{"revision":"bb268edef8471cbb33a8d18ed26781aa","url":"js/424.js"},{"revision":"49d94fdc056b40b46982ddac4cf24991","url":"js/53.js"},{"revision":"59f1f9de3cdef534d076d0b394bcc078","url":"js/706.js"},{"revision":"df4b245fb328bffd573ac9d499581fcc","url":"js/846.js"},{"revision":"4761a232cc11b7aedd26b71b265cab45","url":"js/app.js"},{"revision":"eb2e008f18899c6d965da6f07d0aaf7f","url":"offline.html"}];

// 
workbox.routing.registerRoute(
	new RegExp('/storage/uploads/'),
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'uploads',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 15
			}),
			new workbox.cacheableResponse.Plugin({
				statuses: [200]
			})
		]
	})
);

workbox.precaching.precacheAndRoute(precacheManifest);

//
const networkFirstHandler = new workbox.strategies.NetworkFirst({
	cacheName: 'dynamic',
	plugins: [
		new workbox.expiration.Plugin({
			maxEntries: 10
		}),
		new workbox.cacheableResponse.Plugin({
			statuses: [200]
		})
	]
});

const FALLBACK_URL = workbox.precaching.getCacheKeyForURL('/offline.html');
const matcher = ({ event }) => event.request.mode === 'navigate';
const handler = args =>
	networkFirstHandler
		.handle(args)
		.then(response => response || caches.match(FALLBACK_URL))
		.catch(() => caches.match(FALLBACK_URL));

workbox.routing.registerRoute(matcher, handler);