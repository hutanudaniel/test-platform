var CACHE_STATIC_NAME = "static-v4";

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  let urlsToCache = [];

    urlsToCache = [
      // "/",
      // "/home",
      //  "/my-account",
      // // "/ws",
      // "/static/js/bundle.js",
      // "/manifest.dev.json",
      // "/favicon.ico",
      // "/index.html",
      // "/sw.dev.js",
      // "/images/icons/app-icon-48x48.png",
      // "/images/icons/app-icon-96x96.png",
      // "/images/icons/app-icon-144x144.png",
      // "/images/icons/app-icon-192x192.png",
      // "/images/icons/app-icon-256x256.png",
      // "/images/icons/app-icon-384x384.png",
      // "/images/icons/app-icon-512x512.png",
    ];
   
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      console.log("[Service Worker] Precaching App Shell");
      cache.addAll(urlsToCache);
    })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }

    })
  );
});
