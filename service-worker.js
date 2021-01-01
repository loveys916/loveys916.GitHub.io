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
    "revision": "8a9bccd6be36e18fae783eb2079d5cf3"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "f6f51b2c2ecd52a49364b1296b125e18"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "038124059eba0bf0bdbd2bfd8f528bb7"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "a48cb4a3c74fa06bed722c7a7da38444"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "49160b00ae9f8c5e743bf69f7fb49096"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "507f461fee013204751e1c713be8dd0e"
  },
  {
    "url": "2021/TG群组推荐.html",
    "revision": "0b1a9edceacbfbff3bb8533ccfbc6740"
  },
  {
    "url": "404.html",
    "revision": "b9495fa468e05957fb22ef81b7925024"
  },
  {
    "url": "about/index.html",
    "revision": "d6037f1a6a95e89097452a3e534ad15e"
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
    "url": "assets/js/12.fb4ee9a7.js",
    "revision": "e0b4931d6f194ada3d8b89e50872f79f"
  },
  {
    "url": "assets/js/13.30f7950b.js",
    "revision": "e292b7754f79597d776e46caccaeaa31"
  },
  {
    "url": "assets/js/14.642b1d94.js",
    "revision": "0adc7d7ac3b94e3cceffd125f4ccb7b6"
  },
  {
    "url": "assets/js/15.2eb00abd.js",
    "revision": "1a6718301843e69fb1fa1c84f921d189"
  },
  {
    "url": "assets/js/16.dfb2ba36.js",
    "revision": "8093825f12cd9aa14ae56312c8c857e7"
  },
  {
    "url": "assets/js/17.31740d9c.js",
    "revision": "a072211384442e9635f27162d1bb4906"
  },
  {
    "url": "assets/js/18.8e2a4d20.js",
    "revision": "baa4c7f4e079265a6b6875f2cbf7e6b1"
  },
  {
    "url": "assets/js/19.0dc086bd.js",
    "revision": "38d85f510d421082ae03643f03565e17"
  },
  {
    "url": "assets/js/20.9b42a361.js",
    "revision": "61693e21540f687abb86fe572511a598"
  },
  {
    "url": "assets/js/21.ea55a5d0.js",
    "revision": "5c70f3a27a9a0e02c21f85894fac5ae4"
  },
  {
    "url": "assets/js/22.c894fc30.js",
    "revision": "9f3896f37d4a32b7cfbd630f3fcd07ac"
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
    "url": "assets/js/app.734c7d75.js",
    "revision": "6e697a0add4e6a7646adff2d538e42b6"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "c755273f155cf7de82958c73f92eb37a"
  },
  {
    "url": "categories/index.html",
    "revision": "ee081cbec3321a910547d2bfb3027bed"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "dd7f5dd626b209ceb16c4c825390262b"
  },
  {
    "url": "categories/Telegram/index.html",
    "revision": "46f95a43635062f2c73580e77faad465"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "68dfd9f1d2600ceef0e8cefbf809072b"
  },
  {
    "url": "categories/杂事/index.html",
    "revision": "8e960246721e274d4ef51e74b48df688"
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
    "revision": "597ff0df23d1211b8facb5651880075f"
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
    "revision": "be22eae1feca1b6c2bd783d633643c70"
  },
  {
    "url": "timeline/index.html",
    "revision": "1e7509d2f23a54bf959758c522a43175"
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
