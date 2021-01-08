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
    "revision": "d2fc6327e62704d997d6a5e9b143d3fc"
  },
  {
    "url": "2020/宝塔面板搭建qinVideo2.0说明.html",
    "revision": "d24d6b60629b1681a66cd5873ea06401"
  },
  {
    "url": "2020/宝塔面板搭建小浣熊cms3.0说明.html",
    "revision": "83ad8019ddc7f95c7d5327cfb8ce7a7d"
  },
  {
    "url": "2020/小浣熊cms3.0文档.html",
    "revision": "468c3cae012c2c5524944baf9247cf26"
  },
  {
    "url": "2020/记录几个好看的cms网站及源码站.html",
    "revision": "7a64a69383239653355506c5d984fea6"
  },
  {
    "url": "2020/部分接码平台2020-12-30.html",
    "revision": "284e4c68a36290f36d0cfe4f4e883975"
  },
  {
    "url": "2021/1/TG群组推荐.html",
    "revision": "82b26cb35f1899b93210d02c1fa3a7a7"
  },
  {
    "url": "2021/1/使用GITHUB成为CDN服务.html",
    "revision": "eb461e15e02094b65c3afaf151347b35"
  },
  {
    "url": "404.html",
    "revision": "276fef73cdf35f53cc6c23465d809a60"
  },
  {
    "url": "about/index.html",
    "revision": "9fdf73a5559cc83636dd26ab90d5499d"
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
    "url": "assets/js/12.de7ba963.js",
    "revision": "fd0aebc52991009bc4cc8003130abb3e"
  },
  {
    "url": "assets/js/13.30f7950b.js",
    "revision": "e292b7754f79597d776e46caccaeaa31"
  },
  {
    "url": "assets/js/14.bf874903.js",
    "revision": "1400b2d1d221d5394479ea51a942e501"
  },
  {
    "url": "assets/js/15.fac0bba2.js",
    "revision": "86340c9f703e24c2bd1b2ceb1e729333"
  },
  {
    "url": "assets/js/16.d3256bc7.js",
    "revision": "201eef46265f8a77a0137a22987721ef"
  },
  {
    "url": "assets/js/17.bb52ed43.js",
    "revision": "fa592c2d6692007948b7f03a89d5be30"
  },
  {
    "url": "assets/js/18.ae1fa8d1.js",
    "revision": "74da7112fecfbeb0d837d82cb3be2c93"
  },
  {
    "url": "assets/js/19.8ae245cd.js",
    "revision": "33f715f2a38a3ce01abdc4a8863a3d6d"
  },
  {
    "url": "assets/js/20.cf7eb096.js",
    "revision": "6d0e1b6fc55ee2ff4fdfb8604a54a811"
  },
  {
    "url": "assets/js/21.210796b2.js",
    "revision": "cba948560be0d5474324e68be9f764a4"
  },
  {
    "url": "assets/js/22.dce34896.js",
    "revision": "18b30a0d3315d76e7965bd45d719eaba"
  },
  {
    "url": "assets/js/23.5f3cf2ae.js",
    "revision": "da752dae047e0674d04a241f85ecc9fc"
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
    "url": "assets/js/app.c225d78c.js",
    "revision": "6a4cf97cd3ea67bacfff455aec18bc2b"
  },
  {
    "url": "aurora_sky.jpg",
    "revision": "e83ca022d5a7a367c234792693bfc9cc"
  },
  {
    "url": "categories/CMS/index.html",
    "revision": "d83a9dce1f5f7fccaacc7affe7cbe262"
  },
  {
    "url": "categories/Github/index.html",
    "revision": "822bc30d6bb9006097a19f5284badd7a"
  },
  {
    "url": "categories/index.html",
    "revision": "cca0f6e026ce658446db24861421368d"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "f07febad77c6f9439ea31aba6f21237b"
  },
  {
    "url": "categories/Telegram/index.html",
    "revision": "bbb22a6226b09c4be514e4e474a7947f"
  },
  {
    "url": "categories/个人/index.html",
    "revision": "bb3df2502585ae6f8524ed3777925e71"
  },
  {
    "url": "categories/免费/index.html",
    "revision": "fa053bc8b25d53464efe700bc5f10746"
  },
  {
    "url": "categories/杂事/index.html",
    "revision": "dfdcce1abbd003c5f057ee43a8a87cad"
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
    "revision": "43048de1804ff5546385faccb842fd2a"
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
    "revision": "c2b3741c0562f3b26b5f6c63c041746e"
  },
  {
    "url": "timeline/index.html",
    "revision": "59339d3aa4728f613ec5f970296f9c85"
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
