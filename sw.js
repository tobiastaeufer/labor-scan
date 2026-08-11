// Intentionally does not cache anything — the app is under active development
// and the installed icon should always load the latest deployed version.
// Its only purpose is to satisfy "Add to Home Screen" install criteria.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => e.respondWith(fetch(e.request)));
