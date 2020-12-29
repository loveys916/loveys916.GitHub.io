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
    "url": "2020/centos7可视化+RDP.html",
    "revision": "dca79cf0cda7c20629ed51be12639bc7"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "a237cf4c3ca64ba6d0a87f17a42ca322"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "524043d7bd332e7621b12b244de21aad"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "5c031877a28456f6ca72739135f1faba"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "adb5ea665573e913f39896b2c1cccc27"
  },
  {
    "url": "404.html",
    "revision": "60c6cf79400c3d40d8ab59ad51ac3d03"
  },
  {
    "url": "about/index.html",
    "revision": "fda4f4d6be9f09d19b99951258b26771"
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
    "url": "assets/js/12.47ce5412.js",
    "revision": "ebc1fb9564b69923cd13ed4232d0c591"
  },
  {
    "url": "assets/js/13.30f7950b.js",
    "revision": "e292b7754f79597d776e46caccaeaa31"
  },
  {
    "url": "assets/js/14.ba420a0b.js",
    "revision": "3b0a9aeef91b032925d096a471fadcfe"
  },
  {
    "url": "assets/js/15.d0e83a05.js",
    "revision": "767daa5731a59095ce6b1910e0025cfc"
  },
  {
    "url": "assets/js/16.dfb2ba36.js",
    "revision": "8093825f12cd9aa14ae56312c8c857e7"
  },
  {
    "url": "assets/js/17.9855e5e7.js",
    "revision": "035c30216baeb1cb7aeabc9a6c816a27"
  },
  {
    "url": "assets/js/18.5eeb915a.js",
    "revision": "e7412dbd10a5de5bea530fc529a94925"
  },
  {
    "url": "assets/js/19.af9a0525.js",
    "revision": "32c21f555c6b19767d86e4469840beaa"
  },
  {
    "url": "assets/js/20.126a1546.js",
    "revision": "4005e77cf7b48e15bdaadffb215dd5f8"
  },
  {
    "url": "assets/js/3.5ef223c7.js",
    "revision": "14396ba5360b1e960125779501ca49e5"
  },
  {
    "url": "assets/js/4.db899b62.js",
    "revision": "9eb073fdd00ef10868398cf5d61208e1"
  },
  {
    "url": "assets/js/5.72239e42.js",
    "revision": "25f41cfd489312d032a238f33e0f7afe"
  },
  {
    "url": "assets/js/6.624121fb.js",
    "revision": "df2114ac6656c488b92983d2ed73a348"
  },
  {
    "url": "assets/js/7.d0e495c6.js",
    "revision": "18fa95d10e6062aca1a08c5b54ceb5e7"
  },
  {
    "url": "assets/js/8.9b64ca20.js",
    "revision": "601c965de1177b9d639cc6992925f1db"
  },
  {
    "url": "assets/js/9.7b5d1461.js",
    "revision": "737f48313b32c8df0a3d6cba5c63cb11"
  },
  {
    "url": "assets/js/app.0f305673.js",
    "revision": "13463b3037565457570c3bbe7c004140"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "f788276988d4345885b29c45bf3468a4"
  },
  {
    "url": "categories/index.html",
    "revision": "eadc780ec14a328fcd4154f4a32c48de"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "5d220ffaa503d39e160fe7fc0e6c10f7"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "c928e796cd7a3f940253f37dd6212034"
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
    "revision": "e4877155477e538380ccd2ee338aa63f"
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
    "revision": "79c405830e4cbeecb80ea164bd58c057"
  },
  {
    "url": "timeline/index.html",
    "revision": "b8023ed35070df25b562b7a7e41ff5d1"
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
