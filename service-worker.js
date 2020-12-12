/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "f73d0deead6e6d9875784f7bb4acb5b6"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "b23cf240f4d914607d524452bc63d4ea"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "76ea75604b2e31188d74b0a835f82c4b"
  },
  {
    "url": "404.html",
    "revision": "42a73efda6f5aaa0c0ec0a705d71198e"
  },
  {
    "url": "about/index.html",
    "revision": "f7ff04a3cd85084a77cb7ceef243979c"
  },
  {
    "url": "assets/css/0.styles.0fbb1966.css",
    "revision": "ea395fb49df333d3d9d417d095a8816d"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.5d61d03b.js",
    "revision": "e42920cb2508f360ea007fdcf242f331"
  },
  {
    "url": "assets/js/10.48a4ee78.js",
    "revision": "ab2721222d6abcc65fc599de858bb20b"
  },
  {
    "url": "assets/js/11.59f75692.js",
    "revision": "7008355a37408d0cdce01413107131b2"
  },
  {
    "url": "assets/js/12.67de3f4c.js",
    "revision": "e6d8d2a86faf348b6741dc0394d961c6"
  },
  {
    "url": "assets/js/13.e1657e4d.js",
    "revision": "c694c32eeeb5d404726fb5c12287b334"
  },
  {
    "url": "assets/js/14.c7023304.js",
    "revision": "bb6a6f735273a881c5a6943a4c4d1267"
  },
  {
    "url": "assets/js/15.bb79a05d.js",
    "revision": "b9cbc7f9c8e17aba4d54f41b4f4ea74c"
  },
  {
    "url": "assets/js/16.eda83008.js",
    "revision": "fb0c549994c0e1f01e508eb448a001da"
  },
  {
    "url": "assets/js/3.0148cc7b.js",
    "revision": "6e200271a7ecd9274e5479c7a7da8af2"
  },
  {
    "url": "assets/js/4.cf0b4d86.js",
    "revision": "a9b9335f943d78abb017493836c38922"
  },
  {
    "url": "assets/js/5.c00706ae.js",
    "revision": "2515db7447cb3058a1543bc8ee689846"
  },
  {
    "url": "assets/js/6.29d05cd1.js",
    "revision": "9ea86a67292621be130a80b54e84d488"
  },
  {
    "url": "assets/js/7.90d33b92.js",
    "revision": "444d7785ab20e9dcc401d6a7ec4661aa"
  },
  {
    "url": "assets/js/8.a3547c89.js",
    "revision": "716d035f1e8fa6f690f00178ea0e82d1"
  },
  {
    "url": "assets/js/9.f6cd1958.js",
    "revision": "b52d459f6178b14a2656c89941439d18"
  },
  {
    "url": "assets/js/app.a06c1ff7.js",
    "revision": "34d2b7b30a4e0bc02ca07a17cca14fdc"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "ed09e2c645c80dc0e9ece8a01bb37c41"
  },
  {
    "url": "categories/index.html",
    "revision": "41f926e4e30bfe83929991fe9ce8429c"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "ae57cb9fdea1fbf5c9780bf973f2310c"
  },
  {
    "url": "icons/128.png",
    "revision": "0c6f20a3cbe23bb5e2548c9ab6b5bf11"
  },
  {
    "url": "icons/144.png",
    "revision": "79c810d8429de9b48a8a6d403079e631"
  },
  {
    "url": "icons/192.png",
    "revision": "a9c94773274a7a57d14365dfe95678f6"
  },
  {
    "url": "icons/256.png",
    "revision": "694700192100cfe26f8ff50bf1807b3f"
  },
  {
    "url": "icons/512.png",
    "revision": "066acf0be0dcb1439d80b4c881205d8b"
  },
  {
    "url": "index.html",
    "revision": "a91fc6a75ab49e9a0a90abb301a924d1"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "dab4d9c2dcc6c10d4a0825889e531db8"
  },
  {
    "url": "logo.png",
    "revision": "109fc962cab51a14980f43741cb0350d"
  },
  {
    "url": "tag/index.html",
    "revision": "dfe7264250df35c69b5fbb09aa6e8f3c"
  },
  {
    "url": "timeline/index.html",
    "revision": "c803d72eac78d6a0cc526d4bd230559a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
