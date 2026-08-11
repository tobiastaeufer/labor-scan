// Intentionally does not cache anything — the app is under active development
// and the installed icon should always load the latest deployed version.
// Its only purpose is to satisfy "Add to Home Screen" install criteria.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
// No respondWith() call here on purpose: every request (same-origin AND
// cross-origin, e.g. ChemInventory, PubChem, CAS Common Chemistry) is left
// completely untouched and handled natively by the browser. Calling
// fetch(event.request) here to "pass it through" previously broke CORS on
// cross-origin requests for some clients — this fetch handler now does
// nothing, which is the safest possible no-op.
self.addEventListener("fetch", () => {});
