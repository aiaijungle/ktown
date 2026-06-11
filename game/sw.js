/* K-Town service worker — 오프라인 동작 + 폰 소장 (전자책처럼) */
const CACHE = 'ktown-v13';  // ⚠️ 에셋(i18n.js·worddex.js 등) 수정할 때마다 버전 올리기
const PHOTOS = ['man','woman','man2','woman2','seoul','busan','concert','samgyeopsal','gimbap','food2'].map(n=>`./photos/${n}.jpg`);
const ASSETS = ['./', './index.html', './worddex.js', './i18n.js', './audio_map.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', ...PHOTOS];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // cache-first (앱 셸은 오프라인 우선), 네트워크는 보강
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const cp = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, cp));
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
