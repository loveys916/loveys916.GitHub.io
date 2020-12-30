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
    "revision": "86141122faa9d68f73aae787f4ca69db"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "ad190b3681fdea4e66a07128df52802c"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "33506ce8d6d80cd2c1cd40e27b77c4ec"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "96252c43fd83f4bf10efff5c5f426028"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "3e072dbe197e5a6246a27dc6f9344e98"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "0d145ce6fc3d11eafbe42be2fa1e1281"
  },
  {
    "url": "404.html",
    "revision": "994233bc4531b5dcc24626f6708e3356"
  },
  {
    "url": "about/index.html",
    "revision": "2240cb378f43eaf4a8d8fdaba6bec917"
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
    "url": "assets/js/1.1e629ff5.js",
    "revision": "3d3e309d30c54972f6e6e6b360b93397"
  },
  {
    "url": "assets/js/10.ad9f4dd6.js",
    "revision": "bfa4e9c3ed60c2cfc40a5f55d6565cbf"
  },
  {
    "url": "assets/js/11.e77c0f03.js",
    "revision": "fe3a20edf60c189081e59656b4cf6546"
  },
  {
    "url": "assets/js/12.c7c1f2d3.js",
    "revision": "ade2030681ca9c19e59ce39811fded4b"
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
    "url": "assets/js/16.5cf84872.js",
    "revision": "c0198c6b978c66f5652052d814f1934d"
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
    "url": "assets/js/19.f062726b.js",
    "revision": "982a7c3b7ce78613e187d10ea9b71418"
  },
  {
    "url": "assets/js/20.be009a34.js",
    "revision": "1637d253183ddef97d9505a84230291e"
  },
  {
    "url": "assets/js/21.bf8d0daf.js",
    "revision": "618c4dcc5ad3130106749bee154a9781"
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
    "url": "assets/js/7.dfbbff6e.js",
    "revision": "2a78ae0dba3ae777ee61b468eb95ec47"
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
    "url": "assets/js/app.c9beef65.js",
    "revision": "bc708bfa521a7ad59a800b3925079c9e"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "47edf8314086673cd4d6176427300b9a"
  },
  {
    "url": "categories/index.html",
    "revision": "2694ea4aa57164b089fcbc19225c2166"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "d21735f25034404b2737f7d48f9bdfcf"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "2905f2461abdbaf73fdd94879123794a"
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
    "revision": "2e366ba5f998066f1a391a8e3ec1cf4c"
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
    "revision": "9dd20cc9abdb539be6b3bbc5f541a636"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd37f823781e244af1b4c3096f3d8c34"
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
