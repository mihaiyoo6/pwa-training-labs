importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([]);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
    workboxSW.strategies.cacheFirst({
        cacheName: 'googleapis',
        cacheExpiration: {
            maxEntries: 20
        },
        cacheableResponse: { statuses: [0, 200] }
    })
);

workboxSW.router.registerRoute('http://weloveiconfonts.com/(.*)',
    workboxSW.strategies.cacheFirst({
        cacheName: 'iconfonts',
        cacheExpiration: {
            maxEntries: 20
        },
        cacheableResponse: { statuses: [0, 200] }
    })
);

//we want no more that 50 images in the cache, we check using a cache first strategy
workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/,
    workboxSW.strategies.cacheFirst({
        cacheName: 'images-cache',
        cacheExpiration: {
            maxEntries: 50
        }
    })
);
