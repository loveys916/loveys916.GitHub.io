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
    "revision": "b8c94dc182e289a650efe3d35018caee"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "e551c6acb9364fe8968ebb02210bb10c"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "0b0cac8387bf568ba88f354ddb77b03f"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "42e8b3443d8eacd4b26f005c5ef9c6bc"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "ca5aed5a6894e0639aa7fba9514888aa"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "98647c20323b7de61809300f3099f16a"
  },
  {
    "url": "2021/1/EUserv IPV6免费服务器相关.html",
    "revision": "5bd22439deacc14f82681e08db3c0baf"
  },
  {
    "url": "2021/1/TG群组推荐.html",
    "revision": "08cdbcb74a365db30e5a2bb5353ebfef"
  },
  {
    "url": "2021/1/使用GITHUB成为CDN服务.html",
    "revision": "22cef4e636bf41d40aa7ab6fc6f9dc28"
  },
  {
    "url": "2021/1/前端的RSA长字段中文加密.html",
    "revision": "d9db50d167353ddecdd3de9484c1d4c8"
  },
  {
    "url": "2021/1/正则记录-持续更新.html",
    "revision": "f536cc25460a89a8347997b40291adae"
  },
  {
    "url": "2021/1/转义字符.html",
    "revision": "0aacc39988e8f4db9501dd9e396ac95c"
  },
  {
    "url": "2021/2/MP4文件Moov box的位置.html",
    "revision": "091534684d7cde8a1b30e7c472cca352"
  },
  {
    "url": "2021/2/优化项目.html",
    "revision": "3ea9587b594bc923d8b07a7359cc5fa8"
  },
  {
    "url": "2021/2/自用vue.config.js配置.html",
    "revision": "04e3591fbb710a8872fcdb6dc1bba529"
  },
  {
    "url": "404.html",
    "revision": "5dadf00b39ca9a01f76e7dd9dbd9b2f7"
  },
  {
    "url": "about/index.html",
    "revision": "d9b1d45cf4f8ace2cf09e745f6e80bd0"
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
    "url": "assets/js/13.a4f9fb53.js",
    "revision": "ed70584082712315318eb6b75e27dfde"
  },
  {
    "url": "assets/js/14.b28d83ea.js",
    "revision": "efe21733be29615ed93a2ee5f7448acd"
  },
  {
    "url": "assets/js/15.e1dfdb94.js",
    "revision": "9bd5b79f2dff00601227f0379ca1e312"
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
    "url": "assets/js/18.919f08a2.js",
    "revision": "ba01583bea1b866a0c45d1fe923c31f7"
  },
  {
    "url": "assets/js/19.b7dc4b13.js",
    "revision": "e6057a4766661da39169d9d3e2be18af"
  },
  {
    "url": "assets/js/20.4cbbf53b.js",
    "revision": "7ce02db484d198bf8cc5fa6932a20476"
  },
  {
    "url": "assets/js/21.6f8fed31.js",
    "revision": "c3772a99e87ce04306d2786aa5269486"
  },
  {
    "url": "assets/js/22.a750eb05.js",
    "revision": "83bbc25ad24dde521bdd7546c1bcabfe"
  },
  {
    "url": "assets/js/23.805fb605.js",
    "revision": "e095e9a0fc791cdd94f2150603be6e2f"
  },
  {
    "url": "assets/js/24.8eebd214.js",
    "revision": "c71885b5a53c51a0cc25529d454a17ba"
  },
  {
    "url": "assets/js/25.08ef7e7c.js",
    "revision": "51a20114e53e17fd40514ebf3eb4bd7d"
  },
  {
    "url": "assets/js/26.5c4a1cc1.js",
    "revision": "c4785178af9dab5b3b5d8e294734d973"
  },
  {
    "url": "assets/js/27.620c042b.js",
    "revision": "535566ad9b440c04d049d5bb0694fec8"
  },
  {
    "url": "assets/js/28.7f2c9dab.js",
    "revision": "16269c1b86426c9ab122b551a6e83e3f"
  },
  {
    "url": "assets/js/29.f49e0dcd.js",
    "revision": "cec9993cd3afaf186e65883b9af50307"
  },
  {
    "url": "assets/js/3.9be8d15d.js",
    "revision": "23a58cfa5bd7f823e888ca61ea7f3443"
  },
  {
    "url": "assets/js/30.082dc6be.js",
    "revision": "da69055b67db8f6d66aa24fd77393fdb"
  },
  {
    "url": "assets/js/4.48e95e6d.js",
    "revision": "bc490dd71a8023b0d77a7468e53dfff7"
  },
  {
    "url": "assets/js/5.de264aea.js",
    "revision": "d8144ab14d72b117fcf5a30310174d27"
  },
  {
    "url": "assets/js/6.0a353286.js",
    "revision": "74f587c483cfe6efaff8346b9c7634fa"
  },
  {
    "url": "assets/js/7.780a59db.js",
    "revision": "85c8036268a6d0bdeb9c656f04d3623d"
  },
  {
    "url": "assets/js/8.da0eedee.js",
    "revision": "bfb5ad88bd89507f735d788287f63cc8"
  },
  {
    "url": "assets/js/9.7c4aae79.js",
    "revision": "54596b4b40b7c3b5cc42476d74565337"
  },
  {
    "url": "assets/js/app.3dc548bc.js",
    "revision": "0de54e0e16381f7b77caa50707093c58"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "10bda0beb63a8d5edb4d854a1fb0fbab"
  },
  {
    "url": "categories/Github/index.html",
    "revision": "f110da66b634ef54f73dbbb759b1bdb1"
  },
  {
    "url": "categories/index.html",
    "revision": "81a5eb2664eaa9273a4bcc65ec3743a9"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "85860bf92b68cebffd0685b06b5def51"
  },
  {
    "url": "categories/MP4/index.html",
    "revision": "64367e01a9e287505f9fdd2ed2afcffe"
  },
  {
    "url": "categories/Telegram/index.html",
    "revision": "1a61891cd7399c85531edc000bde1302"
  },
  {
    "url": "categories/VUE/index.html",
    "revision": "dede7b4792047db5517b4a189c920a68"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "6051df705e0c10cbef6e2ea12fb0d07c"
  },
  {
    "url": "categories/优化/index.html",
    "revision": "70fb29b7835ff251fee55949af2ff55c"
  },
  {
    "url": "categories/免费/index.html",
    "revision": "d549c3854f1e501ff3eef1919f609ef4"
  },
  {
    "url": "categories/加密/index.html",
    "revision": "74942af072489d08a871ed5929a7cc3d"
  },
  {
    "url": "categories/杂事/index.html",
    "revision": "e9c58e3c0b501761af2315a3d707956a"
  },
  {
    "url": "categories/正则/index.html",
    "revision": "4ad056643a638e7c2338440a31ad8ce6"
  },
  {
    "url": "categories/转义/index.html",
    "revision": "442945be58f2d93fff921fad7967ed73"
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
    "revision": "840dd3d5d161767c0f8f3a70ac032553"
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
    "revision": "21696c3b9ee493dd6242ffdbb31d0f13"
  },
  {
    "url": "timeline/index.html",
    "revision": "9c0e073b8b544113311594d22e51debb"
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
