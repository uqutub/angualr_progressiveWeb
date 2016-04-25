var cacheName = 'weatherPWA-step-5-11';
var filesToCache = [
  '/',
  "../components/home/home.html",
  "../components/home/home.js",
  "../components/about/about.html",
  "../components/about/about.js",
  "../components/contract/contract.html",
  "../components/contract/contract.js",
  "../config/config.js",
  '../index.html',
  '../app.js',

  '../styles/inline.css',
  // '/images/clear.png',
  // '/images/cloudy-scattered-showers.png',
  // '/images/cloudy.png',
  // '/images/fog.png',
  '../images/ic\_add\_white\_24px.svg',
  '../images/ic\_refresh\_white\_24px.svg'
  // '/images/partly-cloudy.png',
  // '/images/rain.png',
  // '/images/scattered-showers.png',
  // '/images/sleet.png',
  // '/images/snow.png',
  // '/images/thunderstorm.png',
  // '/images/wind.png'

];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
