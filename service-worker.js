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
    "revision": "df2ab9fc496c0094bcd0d6ee40a4c46e"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "7e8c0f6f77c41754e818cbc0341ec7eb"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "50f0911e66c9f4ba42df01f018153fc7"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "bfdc38f3f9ff39d0b5cafd11c54259de"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "f08c53c5c68d4c0b221da8ad53ff6039"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "fb9f64619c3d9aab4506875fb68d7779"
  },
  {
    "url": "2021/TG群组推荐.html",
    "revision": "b6c6d4b5d187c38886d255fa215b8c6d"
  },
  {
    "url": "404.html",
    "revision": "0f7351a5c0c2130bad517c3ff099e15e"
  },
  {
    "url": "about/index.html",
    "revision": "a1cb092b1a044c2cff15a449f01670ee"
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
    "url": "assets/js/17.840d8c02.js",
    "revision": "dc828594a8911cb3de08fbf350ab6057"
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
    "url": "assets/js/app.68111859.js",
    "revision": "f3d9e27dc6d807114ffc1e46022acbd9"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "82f3602094cb53df5863022bb5afc902"
  },
  {
    "url": "categories/index.html",
    "revision": "7817e703fa3f7c8956232cda217de3ea"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "f74e71b7aeff8195d6d2284582d9747e"
  },
  {
    "url": "categories/Telegram/index.html",
    "revision": "602fcf64abe16cef1a670184cd6b120d"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "579aec28aef4ee5da72ef8ca0ec9cfce"
  },
  {
    "url": "categories/杂事/index.html",
    "revision": "cf86e872a06f73685bcef1ec16736d4f"
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
    "revision": "4103e785502bff3575a3751d5a10fa32"
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
    "revision": "c81a63b8c68080724960ea24cfd7f999"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c7d6dbcf65c89fae4bcec30e6e108bd"
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
