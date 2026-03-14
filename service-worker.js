// Service Worker for 蓝剑切水果
const CACHE_NAME = 'fruit-ninja-v1';
const urlsToCache = [
  '/fruit-ninja/',
  '/fruit-ninja/index.html',
  '/fruit-ninja/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
