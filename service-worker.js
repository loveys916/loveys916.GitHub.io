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
    "revision": "a75de12141804b9fd4b6cabf34a7f77c"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "1bfc0df46a7ac403833d47238306447d"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "f6c295af8486072ae379e5d3e856d461"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "3b8a8c1a243599f7c12d7767a5dea44e"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "7824bc8168cb9955bc14287a6050fdae"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "5b632419d866adc9211a4ecb055fddc4"
  },
  {
    "url": "2021/1/EUserv IPV6免费服务器相关.html",
    "revision": "3a7367639405bf01d5b2be3e6ab16504"
  },
  {
    "url": "2021/1/TG群组推荐.html",
    "revision": "f1d8b8030c725c8d756071c177c53892"
  },
  {
    "url": "2021/1/使用GITHUB成为CDN服务.html",
    "revision": "b7cb55c63e15e23343dc1db683fd6cb5"
  },
  {
    "url": "2021/1/正则记录-持续更新.html",
    "revision": "d285f61a8b6713bf5222a49fb1ec2d0c"
  },
  {
    "url": "404.html",
    "revision": "954e97948f242c6f16a804d30b79cca8"
  },
  {
    "url": "about/index.html",
    "revision": "1f08c01c263bb54be6114866bcdde693"
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
    "url": "assets/js/12.b26b2351.js",
    "revision": "f459303e783eb64cb9ff7d15d7b64c5a"
  },
  {
    "url": "assets/js/13.c3650322.js",
    "revision": "e4d75f54a171f31867d38e06ce1e3d1e"
  },
  {
    "url": "assets/js/14.f2b8018d.js",
    "revision": "b2fb05645d1f1e068eeaa903429cbb38"
  },
  {
    "url": "assets/js/15.fac0bba2.js",
    "revision": "86340c9f703e24c2bd1b2ceb1e729333"
  },
  {
    "url": "assets/js/16.bba4cb37.js",
    "revision": "cb7c616d2c8801688a7d3981a8d2c3cb"
  },
  {
    "url": "assets/js/17.bb52ed43.js",
    "revision": "fa592c2d6692007948b7f03a89d5be30"
  },
  {
    "url": "assets/js/18.c35dffbd.js",
    "revision": "891dcb541c84b48ffcb21ce84330fd0e"
  },
  {
    "url": "assets/js/19.4cee5616.js",
    "revision": "afdff8cc2a0461e79d53178f1816841d"
  },
  {
    "url": "assets/js/20.f9850bc9.js",
    "revision": "bf9918fe48bf2947fb1708107886b451"
  },
  {
    "url": "assets/js/21.6f8fed31.js",
    "revision": "c3772a99e87ce04306d2786aa5269486"
  },
  {
    "url": "assets/js/22.391be848.js",
    "revision": "166532c5b999e2209df7584a15b34043"
  },
  {
    "url": "assets/js/23.54eea5ed.js",
    "revision": "a108f837f20b2ffc3f0bd69daf3d43cc"
  },
  {
    "url": "assets/js/24.403ae444.js",
    "revision": "0cc8a5745fcbb4e33772e266c5c649af"
  },
  {
    "url": "assets/js/25.f23d46e9.js",
    "revision": "9936e33268312565f64eb483021ea19a"
  },
  {
    "url": "assets/js/3.9be8d15d.js",
    "revision": "23a58cfa5bd7f823e888ca61ea7f3443"
  },
  {
    "url": "assets/js/4.836c5916.js",
    "revision": "adba908aff04326512a73fed68dc127b"
  },
  {
    "url": "assets/js/5.0f3a69b1.js",
    "revision": "f003824c53eed891b695a24a7b1845be"
  },
  {
    "url": "assets/js/6.b52c10cf.js",
    "revision": "2aec4084295091194bd0c23be34b2b4e"
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
    "url": "assets/js/app.73d0fee9.js",
    "revision": "5c5b7a5effc3dd9b2b8c5b1388fea8f1"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "3d091743c2073af2f42074db9f5cf93c"
  },
  {
    "url": "categories/Github/index.html",
    "revision": "ba4926144fdf2cb001ef8174ca6df51e"
  },
  {
    "url": "categories/index.html",
    "revision": "f17d29cac04bcc7d541b912acff8c5e9"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "994fcc543796edd513d4d036f30a5b8a"
  },
  {
    "url": "categories/Telegram/index.html",
    "revision": "6d6732a78cfb950187df84958ac85baf"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "2057c5c10a31e1db44d00c0bb52d955c"
  },
  {
    "url": "categories/免费/index.html",
    "revision": "9b9b5381fa5140ef58da53f781f03284"
  },
  {
    "url": "categories/杂事/index.html",
    "revision": "fa302db64c95305d2bafa922237b38cb"
  },
  {
    "url": "categories/正则/index.html",
    "revision": "9eeee3a4a2e59ff8f74b93e50d5e3b06"
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
    "revision": "7ab91c4a95023a8719243d7cbeddcce5"
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
    "revision": "4cf927ebf9ab7b3d50a0599678591a3a"
  },
  {
    "url": "timeline/index.html",
    "revision": "caec3eb86714e719ad15362250a37172"
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
