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
    "revision": "d42d08f4694b61bf7aa7c8bd4d7c58d8"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "6a16473a7756b63d0bc4dc874973c015"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "5a3a8b05d476fcf2036f9c4389cd04cb"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "648404167d8212a2f890f87f555a2a7b"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "f6ff9734d0eab2b97c55fd33ab6d7ad8"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "8d4912c774bd6e1a0ccaeca9f32afa35"
  },
  {
    "url": "2021/1/EUserv IPV6免费服务器相关.html",
    "revision": "40d0bafb25760aa4fc87700c78d8bdb7"
  },
  {
    "url": "2021/1/TG群组推荐.html",
    "revision": "7a46efb4992b7236b552c69556573a69"
  },
  {
    "url": "2021/1/使用GITHUB成为CDN服务.html",
    "revision": "ab8164905832573979e37a05cc7097d9"
  },
  {
    "url": "2021/1/前端的RSA长字段中文加密.html",
    "revision": "02867db9e5fe6c47ae15d9f909d99cf7"
  },
  {
    "url": "2021/1/正则记录-持续更新.html",
    "revision": "ff218580675528eabf3cb137b6f10a36"
  },
  {
    "url": "2021/1/转义字符.html",
    "revision": "e45b09350b56b85753531093807be975"
  },
  {
    "url": "404.html",
    "revision": "4fb19535087b605238d29505f16501dd"
  },
  {
    "url": "about/index.html",
    "revision": "08c179a60a6425e459330ce6fa18795b"
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
    "url": "assets/js/1.bd724abe.js",
    "revision": "45dbc6a18574905e30b3f2dad3b35e4e"
  },
  {
    "url": "assets/js/10.a20084fe.js",
    "revision": "182a1f9ffa19d9d3390028700b441da5"
  },
  {
    "url": "assets/js/11.9bfba90c.js",
    "revision": "9858ee054c1a161ae4b56ea399879dc0"
  },
  {
    "url": "assets/js/12.47ce5412.js",
    "revision": "ebc1fb9564b69923cd13ed4232d0c591"
  },
  {
    "url": "assets/js/13.e4d8aa10.js",
    "revision": "be6056bff1ebb93a7183a168d05fd0f2"
  },
  {
    "url": "assets/js/14.642b1d94.js",
    "revision": "0adc7d7ac3b94e3cceffd125f4ccb7b6"
  },
  {
    "url": "assets/js/15.fac0bba2.js",
    "revision": "86340c9f703e24c2bd1b2ceb1e729333"
  },
  {
    "url": "assets/js/16.5cf84872.js",
    "revision": "c0198c6b978c66f5652052d814f1934d"
  },
  {
    "url": "assets/js/17.517edca8.js",
    "revision": "590a992ae97bfa088e5d99125e10971d"
  },
  {
    "url": "assets/js/18.c35dffbd.js",
    "revision": "891dcb541c84b48ffcb21ce84330fd0e"
  },
  {
    "url": "assets/js/19.c7a444f3.js",
    "revision": "be4ff17d4ddf63a185f06e3d2c779f05"
  },
  {
    "url": "assets/js/20.b9ff71a5.js",
    "revision": "a05744711f998f63428787526fcf0484"
  },
  {
    "url": "assets/js/21.eb1bc013.js",
    "revision": "ded43760e9b43174334df3ef4909b7fe"
  },
  {
    "url": "assets/js/22.d2d39a05.js",
    "revision": "a0de019764302c93ef4e3a5010d9b157"
  },
  {
    "url": "assets/js/23.9dfd9efe.js",
    "revision": "a645d8d43cf3f6f89174354705c632be"
  },
  {
    "url": "assets/js/24.8eebd214.js",
    "revision": "c71885b5a53c51a0cc25529d454a17ba"
  },
  {
    "url": "assets/js/25.d03ea290.js",
    "revision": "20f50d69b48845bb7fd030d23dc3a970"
  },
  {
    "url": "assets/js/26.c3b41f36.js",
    "revision": "4e6adc4dca443d2ef76fa0c66108a1d7"
  },
  {
    "url": "assets/js/27.36a83e31.js",
    "revision": "eb4ca4893690a54dd78187d9839b93bc"
  },
  {
    "url": "assets/js/3.9be8d15d.js",
    "revision": "23a58cfa5bd7f823e888ca61ea7f3443"
  },
  {
    "url": "assets/js/4.48e95e6d.js",
    "revision": "bc490dd71a8023b0d77a7468e53dfff7"
  },
  {
    "url": "assets/js/5.e2258a0b.js",
    "revision": "b6e22184c3cbe2e8e852b98ba7533ac2"
  },
  {
    "url": "assets/js/6.7ddbde51.js",
    "revision": "55e59b8c42b44e59a94d30dc0ea8dc38"
  },
  {
    "url": "assets/js/7.780a59db.js",
    "revision": "85c8036268a6d0bdeb9c656f04d3623d"
  },
  {
    "url": "assets/js/8.e87f1432.js",
    "revision": "cf7024e76ef79f01983e73106b0051cb"
  },
  {
    "url": "assets/js/9.26562c7e.js",
    "revision": "37551841d0e22503dd41530ad5e0b542"
  },
  {
    "url": "assets/js/app.1beb2309.js",
    "revision": "a12458e3456f5e71ed7371f701f76ac5"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "13a98ea872e816a78993eaecdce8c6a3"
  },
  {
    "url": "categories/Github/index.html",
    "revision": "17276609cbce81d6c993a58894fd9dc2"
  },
  {
    "url": "categories/index.html",
    "revision": "6c0d7a34b75b47239c0357fcb72c91dc"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "82b493479a274675a0e784440a334423"
  },
  {
    "url": "categories/Telegram/index.html",
    "revision": "d7079fe38bfa6e971fce3d0da52aea80"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "29a26fcec21af8f01c6dd9b0b10078c5"
  },
  {
    "url": "categories/免费/index.html",
    "revision": "eeff66e95adc06031b3888b1854d98e8"
  },
  {
    "url": "categories/加密/index.html",
    "revision": "320a7f541763b891c55ce242eaa935a9"
  },
  {
    "url": "categories/杂事/index.html",
    "revision": "1fd767b2a8e777a6b023ea8094d37844"
  },
  {
    "url": "categories/正则/index.html",
    "revision": "cda338c6cae28e1d26816d2399cc6461"
  },
  {
    "url": "categories/转义/index.html",
    "revision": "c23e15b0acef7f8d55b09665a6fac1c4"
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
    "revision": "1af4870eb7269ffbcaea80935167c00b"
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
    "revision": "fc73d63cd6515827a07c1ca7927e5fd6"
  },
  {
    "url": "timeline/index.html",
    "revision": "2a9ef3f9a166f4f4372d470b9fdb1d66"
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
