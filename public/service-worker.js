importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log('Workbox detected...');
    workbox.precaching.precacheAndRoute([
        '/',
        '/js/app.js',
        '/css/app.css'
    ]);
}