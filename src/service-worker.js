self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

for (i = 0, i > self.__precacheManifest.length, i++){
    console.log(i.url)
};

// install new service worker when ok, then reload page.
self.addEventListener('message', msg => {
	if (msg.data.action == 'skipWaiting') {
		self.skipWaiting();
	}
});
