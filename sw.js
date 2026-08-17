/* Doodle Warehouse — service worker
   ------------------------------------------------------------------
   BUILD 是快取的版本號。換過 index.html 或任何一個檔案，這一行就要改，
   否則舊的 service worker 會繼續把舊檔送給瀏覽器。 */
const BUILD = "dw-1.8.0";
const CACHE = "doodle-warehouse-" + BUILD;
const ASSETS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-180.png", "./icons/icon-192.png",
  "./icons/icon-512.png", "./icons/icon-512-maskable.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* 網路優先，失敗才吃快取：改版之後不用等使用者手動清，
   離線時仍然打得開。 */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
