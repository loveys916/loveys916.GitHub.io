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
    "revision": "ac8e3ce5e2f3d7aa6735d1ac840797c5"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "82d2259e97616a508881720ddbf57fe4"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "3589771ec45324ebc6141f52bd483d29"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "801f58e3d37b786b31669ac769768ada"
  },
  {
    "url": "404.html",
    "revision": "31fb10a52188842e37e92da0c7a1b5a1"
  },
  {
    "url": "about/index.html",
    "revision": "ba19408d74e1409da40e731cd265e943"
  },
  {
    "url": "assets/css/0.styles.142a074b.css",
    "revision": "958b2d15cd33a9037e9b2d61a748869a"
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
    "url": "assets/js/1.171e35cc.js",
    "revision": "3dcd13693fee4483a4da1f191561df12"
  },
  {
    "url": "assets/js/10.a20084fe.js",
    "revision": "182a1f9ffa19d9d3390028700b441da5"
  },
  {
    "url": "assets/js/11.e77c0f03.js",
    "revision": "fe3a20edf60c189081e59656b4cf6546"
  },
  {
    "url": "assets/js/12.b01ecebd.js",
    "revision": "54c91ccd4d32cd3de4d177e63dc40eaf"
  },
  {
    "url": "assets/js/13.88839404.js",
    "revision": "ec944f31d3f1964740a1f9b49da30318"
  },
  {
    "url": "assets/js/14.e1ca8ad1.js",
    "revision": "45d8a668ec8f25568c23b911242bcefc"
  },
  {
    "url": "assets/js/15.29f5931d.js",
    "revision": "ff4176574d955b3d332028201d0d49ff"
  },
  {
    "url": "assets/js/16.640a863a.js",
    "revision": "6991f1eb142cd6bf24ba777123e79fa0"
  },
  {
    "url": "assets/js/17.1e66dded.js",
    "revision": "e5eb8180cc25de484bc1ab5cdf1b8235"
  },
  {
    "url": "assets/js/18.43c69731.js",
    "revision": "0d74a0e57335e9e96adcb7d7a3ebb59f"
  },
  {
    "url": "assets/js/19.a816fa71.js",
    "revision": "a5364e7c5e149939ef1f79fad241e08b"
  },
  {
    "url": "assets/js/3.5ef223c7.js",
    "revision": "14396ba5360b1e960125779501ca49e5"
  },
  {
    "url": "assets/js/4.7ed447b5.js",
    "revision": "69a636f740ef6560aa7ee6a713225c27"
  },
  {
    "url": "assets/js/5.3da76f78.js",
    "revision": "7e14e20c023c94be066e26c1f12f30b7"
  },
  {
    "url": "assets/js/6.5f8de717.js",
    "revision": "649d332f6d68f1ee7e0174014dfcc470"
  },
  {
    "url": "assets/js/7.d0e495c6.js",
    "revision": "18fa95d10e6062aca1a08c5b54ceb5e7"
  },
  {
    "url": "assets/js/8.3066479f.js",
    "revision": "fbb3039d8ba503d4403da1cc0e0f3d50"
  },
  {
    "url": "assets/js/9.d314079d.js",
    "revision": "789781495ac782acc9a02e94e299fc77"
  },
  {
    "url": "assets/js/app.559d69a3.js",
    "revision": "a3cd024471e0f54ad57c4763f3c333fb"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "f9978f5bdc6d21c5b7e829b7ede5bb4b"
  },
  {
    "url": "categories/index.html",
    "revision": "4a8c65c8379ba57a3dcd8eeb19c35f3a"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "53c702819e4b090f31120bb8ad2f4be2"
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
    "revision": "0b78a11a79604f55d7955a42b59ed349"
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
    "revision": "c49df7edf98913b9a9630fa1133921a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "68b96f15a3edb6fa83c26b68a978ee99"
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
