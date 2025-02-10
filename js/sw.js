const CACHE_NAME = "site-cache-v1";
const urlsToCache = [
  "/",
  "/css/style.css",
  "/js/main.js",
  "/images/logo.png", // أضف كل الصور التي تريد تخزينها
];

// تثبيت الـ Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// استخدام الكاش عند طلب الصور
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
