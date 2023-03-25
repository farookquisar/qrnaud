self.addEventListener('install', function (event)
{
    event.waitUntil(
        caches.open('v1').then(function (cache)
        {
            return cache.addAll([
                '/index.html',
                '/manifest.json',
                '/quraud-icon-192x192.png',
                '/quraud-icon-512x512.png'
            ]);
        })
    );

    // Lock the screen orientation to portrait-primary mode
    screen.orientation.lock('portrait-primary');
});

self.addEventListener('fetch', function (event)
{
    event.respondWith(
        caches.match(event.request).then(function (response)
        {
            return response || fetch(event.request);
        })
    );
});
