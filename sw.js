const cacheName = 'LanslyCache';
const resourcesToPrecache = [
  '/',
  'index.html',
  'ionicons.js',
  'tailwind.min.css',
  'style/style.css',
  'assets/hero.png',
  'assets/Lansly.png',
  'assets/lansly.png',
  'assets/Poppins-Regular.ttf',
  'app.js',
  'help.html',
  'terms.html',
  'why.html',
];
self.addEventListener('install', event => {
  console.log('Installed')
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache)
      })
  )
})
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request))
    .then(cachedResponse => {
      return cachedResponse || fetch(event.request)
    })
})