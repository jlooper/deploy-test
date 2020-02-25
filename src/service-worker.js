var newManifest = [];

for (var i = 0; i < self.__precacheManifest.length; i++) {
	console.log(self.__precacheManifest[i].url);
	if (self.__precacheManifest[i].url !== '/web.config') {
		newManifest = [].concat(self.__precacheManifest || []);
	}
}

workbox.precaching.precacheAndRoute(newManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener('message', msg => {
	if (msg.data.action == 'skipWaiting') {
		self.skipWaiting();
	}
});
