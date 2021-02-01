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
    "revision": "6963838f76b470f66d980976e5d46608"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "3df4ae53bb496f4ab4808d52be950814"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "e4ebc88dc70ee21b22082dfd1bc80dae"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "18eb44e074f371c02c9f98f491138926"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "c2b5c32b45a61d64ac01b62105e0d57c"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "7e52802dc6cc1d6054eaf647b582e49e"
  },
  {
    "url": "2021/1/EUserv IPV6免费服务器相关.html",
    "revision": "5a5bed0f5827b7082b1f95077f24dfdc"
  },
  {
    "url": "2021/1/TG群组推荐.html",
    "revision": "4ac7c848b2da169abdec38f4018e9430"
  },
  {
    "url": "2021/1/使用GITHUB成为CDN服务.html",
    "revision": "1e7a55efd8dff8f2e466cd26b9790499"
  },
  {
    "url": "2021/1/前端的RSA长字段中文加密.html",
    "revision": "e5fd292db7fe59b9900de0fcafdbc0af"
  },
  {
    "url": "2021/1/正则记录-持续更新.html",
    "revision": "ed6da4ad289d971631cc4b0efc53c132"
  },
  {
    "url": "2021/1/转义字符.html",
    "revision": "2c9dea7d407e51a59863bf4e677c8415"
  },
  {
    "url": "2021/2/自用vue.config.js配置.html",
    "revision": "c826c0edd04bbb1eed359b9dc13fbd96"
  },
  {
    "url": "404.html",
    "revision": "796d57860307abf66e566ce0811be72d"
  },
  {
    "url": "about/index.html",
    "revision": "6370d867e55585f61ef529abfe0dd30c"
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
    "url": "assets/js/12.1a4e295e.js",
    "revision": "2c6121bd46d1c05966cc2bf681265bdd"
  },
  {
    "url": "assets/js/13.b67a1efe.js",
    "revision": "5498aab39b114c29dd5dc1dafc848d86"
  },
  {
    "url": "assets/js/14.642b1d94.js",
    "revision": "0adc7d7ac3b94e3cceffd125f4ccb7b6"
  },
  {
    "url": "assets/js/15.a4338244.js",
    "revision": "65be4e46bfeaee9ae3f142d62553de76"
  },
  {
    "url": "assets/js/16.dfb2ba36.js",
    "revision": "8093825f12cd9aa14ae56312c8c857e7"
  },
  {
    "url": "assets/js/17.f146cc13.js",
    "revision": "b666d2be67d89ff5dd081233e9c3e9c9"
  },
  {
    "url": "assets/js/18.2a2d5b77.js",
    "revision": "77c1f118a99c745320ee953c5505a0b5"
  },
  {
    "url": "assets/js/19.6fdcd952.js",
    "revision": "0c6396eddccd8726e1851ce3fbd75453"
  },
  {
    "url": "assets/js/20.8165aa77.js",
    "revision": "b3f61a5181021b37d71aea66f6a7bc49"
  },
  {
    "url": "assets/js/21.b2bf19f7.js",
    "revision": "8f00ec42b5078e91f51fdff54d734fbe"
  },
  {
    "url": "assets/js/22.2c0f25bb.js",
    "revision": "3a0da7f5956eee3b553e69618dcfb7ab"
  },
  {
    "url": "assets/js/23.3b1087c1.js",
    "revision": "fce2078d64c1b54dd69337c767f284d0"
  },
  {
    "url": "assets/js/24.aa065903.js",
    "revision": "8c5cb3517c17f1d2ab388922260d9d49"
  },
  {
    "url": "assets/js/25.39bd4977.js",
    "revision": "4c9fc0e84d52c40b3e619691b8e18f33"
  },
  {
    "url": "assets/js/26.e3aa3c4e.js",
    "revision": "32eeeff8d2b5e0ba9b1f8ab5f4ae0612"
  },
  {
    "url": "assets/js/27.b89c802d.js",
    "revision": "c4b9e4a55a551b1e162e8337c95e10af"
  },
  {
    "url": "assets/js/28.95352b6c.js",
    "revision": "1de34e09e39125ee7b192419266f252e"
  },
  {
    "url": "assets/js/3.9be8d15d.js",
    "revision": "23a58cfa5bd7f823e888ca61ea7f3443"
  },
  {
    "url": "assets/js/4.8041af10.js",
    "revision": "1c739280cdc9094a8fbbc61d1e5cabc1"
  },
  {
    "url": "assets/js/5.d49266e1.js",
    "revision": "01f4d396b44b4c6a4a543efc681b991f"
  },
  {
    "url": "assets/js/6.e8ee79ab.js",
    "revision": "379f82807dadf7ed428f56cb8e028043"
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
    "url": "assets/js/9.54910f44.js",
    "revision": "e9828de0f6087ee635dd42325c75c8bd"
  },
  {
    "url": "assets/js/app.fc175dc9.js",
    "revision": "3e53fe0e96a39ce8c331eabe2978d82d"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "a17d5b14dcb4e4b63b27bf28febc37f8"
  },
  {
    "url": "categories/Github/index.html",
    "revision": "217f7c6010dc732f615fa8595752910a"
  },
  {
    "url": "categories/index.html",
    "revision": "f48503eb682965222a63da7f2f3688dc"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "0b8bdc1c00cb9127829864107df1a1b2"
  },
  {
    "url": "categories/Telegram/index.html",
    "revision": "99d73490586080a0ccde9652cfa5395b"
  },
  {
    "url": "categories/VUE/index.html",
    "revision": "698edf83b13ef55f2e51db5e9d5ab506"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "bc348f5ba259c4fabd49040212b914fe"
  },
  {
    "url": "categories/免费/index.html",
    "revision": "aa4e13532f04f42e51edce38f5670f5f"
  },
  {
    "url": "categories/加密/index.html",
    "revision": "d640d301c6978f7e199e6bcbaeaae603"
  },
  {
    "url": "categories/杂事/index.html",
    "revision": "c91f91ae73046e9d3562d548aace486b"
  },
  {
    "url": "categories/正则/index.html",
    "revision": "f2ae5236806740604a2586c5df674b57"
  },
  {
    "url": "categories/转义/index.html",
    "revision": "4c895201dda4b888b66c55833bc13edf"
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
    "revision": "4ed45a228aa6ce39d17af6ee2c65bfbf"
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
    "revision": "6cfec66bb0115ad3e7655d3af5c4b65f"
  },
  {
    "url": "timeline/index.html",
    "revision": "9dcbfbfa35f9722bc035cb58deec6d3d"
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
