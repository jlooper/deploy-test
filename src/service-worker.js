self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

console.log(self.__precacheManifest.url);

// install new service worker when ok, then reload page.
self.addEventListener('message', msg => {
	if (msg.data.action == 'skipWaiting') {
		self.skipWaiting();
	}
});
