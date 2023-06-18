var CACHE_STATIC_NAME = "static-v4";
// var CACHE_DYNAMIC_NAME = 'dynamic-v2';
// const urlsToCache = [
//     '/',
// '/ws',
// '/static/js/bundle.js',
// '/manifest.json',
// '/favicon.ico',
// '/index.html',
// '/images/icons/app-icon-48x48.png',
// "/images/icons/app-icon-96x96.png",
// '/images/icons/app-icon-144x144.png',
// "/images/icons/app-icon-192x192.png",
// "/images/icons/app-icon-256x256.png",
// "/images/icons/app-icon-384x384.png",
// "/images/icons/app-icon-512x512.png",
// ];

// const self = this;

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  let urlsToCache = [];

  // console.log(process.env.NODE_ENV, "~~~~~~~~~~~~~");

  if (typeof process !== "undefined") {
    urlsToCache = [
      "/",
      "/home",
      "/my-account",
      // "/ws",
      "/static/js/bundle.js",
      "/manifest.prod.json",
      "/favicon.ico",
      "/index.html",
      // '/static/js/bundle.js',
      // '/ws.js',
      // '/favicon.ico',
      "/images/icons/app-icon-48x48.png",
      "/images/icons/app-icon-96x96.png",
      "/images/icons/app-icon-144x144.png",
      "/images/icons/app-icon-192x192.png",
      "/images/icons/app-icon-256x256.png",
      "/images/icons/app-icon-384x384.png",
      "/images/icons/app-icon-512x512.png",
    ];
  } else {
    console.log("------------+")
    urlsToCache = [
      "https://main.d2czrm0d7jxybl.amplifyapp.com", // 
      "https://main.d2czrm0d7jxybl.amplifyapp.com/",
      `https://main.d2czrm0d7jxybl.amplifyapp.com/favicon.ico`,
      "https://main.d2czrm0d7jxybl.amplifyapp.com/index.html",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-48x48.png",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-96x96.png",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-144x144.png",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-192x192.png",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-256x256.png",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-384x384.png",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-512x512.png",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/static/js/main.779626b1.js",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/static/css/main.bd569943.css",
      "https://main.d2czrm0d7jxybl.amplifyapp.com/manifest.prod.json",
    ];
  }
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      console.log("[Service Worker] Precaching App Shell");
      cache.addAll(urlsToCache);
      // cache.addAll([
      //   // '/',
      //   // // '/test6',
      //   // // '/test6/',
      //   // '/test6/home',
      //   // '/test6/comp1',
      //   // '/ws',
      //   // '/static/js/bundle.js',
      //   // '/manifest.json',
      //   // '/favicon.ico',
      //   // '/index.html',
      //   // '/images/icons/app-icon-48x48.png',
      //   // "/images/icons/app-icon-96x96.png",
      //   // '/images/icons/app-icon-144x144.png',
      //   // "/images/icons/app-icon-192x192.png",
      //   // "/images/icons/app-icon-256x256.png",
      //   // "/images/icons/app-icon-384x384.png",
      //   // "/images/icons/app-icon-512x512.png",
      //   `https://main.d2czrm0d7jxybl.amplifyapp.com`,//
      //   `https://main.d2czrm0d7jxybl.amplifyapp.com/`,
      //   `https://main.d2czrm0d7jxybl.amplifyapp.com/favicon.ico`,
      //   'https://main.d2czrm0d7jxybl.amplifyapp.com/index.html',
      //   'https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-48x48.png',
      //   "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-96x96.png",
      //   'https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-144x144.png',
      //   "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-192x192.png",
      //   "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-256x256.png",
      //   "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-384x384.png",
      //   "https://main.d2czrm0d7jxybl.amplifyapp.com/images/icons/app-icon-512x512.png",
      //   "https://main.d2czrm0d7jxybl.amplifyapp.com/static/js/main.48a401ff.js",
      //   "https://main.d2czrm0d7jxybl.amplifyapp.com/static/css/main.6a9bb63a.css",
      //   'https://main.d2czrm0d7jxybl.amplifyapp.com/manifest.json',
      // //   '/setupTests.js',

      //   // '/static/js/bundle.js',
      //   // '/ws.js',
      //   // '/favicon.ico',

      //   //  '/localhost:3000/',
      // //   '/src/js/app.js',
      // //   '/src/js/feed.js',
      // //   '/src/css/app.css',
      // //   '/src/css/feed.css',
      // //   '/src/images/main-image.jpg',
      // //   'https://fonts.googleapis.com/css?family=Roboto:400,700',
      // //   'https://fonts.googleapis.com/icon?family=Material+Icons',
      // //   'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
      // ]);
    })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  // event.waitUntil(
  //   caches.keys()
  //     .then(function(keyList) {
  //       return Promise.all(keyList.map(function(key) {
  //         if (key !== CACHE_STATIC_NAME ) {//&& key !== CACHE_DYNAMIC_NAME
  //           console.log('[Service Worker] Removing old cache.', key);
  //           return caches.delete(key);
  //         }
  //       }));
  //     })
  // );
  // return self.clients.claim();
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        // console.log(event.request, "event.request");
        return fetch(event.request);
      }
      // else {
      //   return fetch(event.request)
      //     .then(function(res) {
      //       return caches.open(CACHE_DYNAMIC_NAME)
      //         .then(function(cache) {
      //           cache.put(event.request.url, res.clone());
      //           return res;
      //         })
      //     })
      //     .catch(function(err) {

      //     });
      // }
    })
  );
});
