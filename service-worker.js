if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const f=e=>a(e,s),n={module:{uri:s},exports:d,require:f};i[s]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"fe7fe603b2cf5e3cd9ca77052d45f0ef"},{url:"about/index.html",revision:"0db7240b0f3c881a49009d22c23dc937"},{url:"archives/2022/01/index.html",revision:"d477ed3b998dc0a6076f5861fb7d6cd1"},{url:"archives/2022/index.html",revision:"f3aa01c95adfaa08067b60e9e0fee351"},{url:"archives/index.html",revision:"e4cf35103ae3c01340d91906046883cc"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Article/index.html",revision:"fce580494a0c004422bafb7c45f63b4e"},{url:"categories/Article/Tech/index.html",revision:"df8fe91ca90cabe1b46fa1fee502cc85"},{url:"categories/index.html",revision:"824a0b32d1f5bfb54b54a1e6d7bc9844"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"4bd88f0df3af285c1626e820b619dab1"},{url:"gallery/index.html",revision:"4bcb54aca91fb15519662a61ac1ebd85"},{url:"img/144x144.jpg",revision:"f04b46eacc74ef76e1115b516179987f"},{url:"img/about_ex.jpg",revision:"3044e4b10243c3d4a6f3beab2fec2d0a"},{url:"img/about.jpg",revision:"ea54a19146faae96f34fb1a268d1cdae"},{url:"img/about.png",revision:"ea54a19146faae96f34fb1a268d1cdae"},{url:"img/android-chrome-192x192.png",revision:"dce791a534c17337212cb915c51942c5"},{url:"img/android-chrome-512x512.png",revision:"5620d6b7d7ec48f64a3e067a805c589b"},{url:"img/apple-touch-icon.png",revision:"7faf19465170492d1e28c98924555894"},{url:"img/avatar.jpg",revision:"023b079c80ef5e2755d683830f7127ba"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/banner_ex.jpg",revision:"ab8be6e38a201a403fe3989a5660438c"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon-16x16.png",revision:"71e6ec5a3561bd8d210fde44c85afecf"},{url:"img/favicon-32x32.png",revision:"55a35ef10889525b7a6925ca94eac55d"},{url:"img/favicon.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/post_ex.jpg",revision:"36aa3f4b682c0260ea96a53ef2a50177"},{url:"index.html",revision:"cf67b234b9f4a3cb1bb6aa2efdb6c9f2"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"ba103a155fac3f6127ee25ef9d86151d"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"b5de1347007ba7c81fc9928edf4fbe3b"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"af5299d7b1b3be6149ac30c9208e2323"},{url:"js/utils.js",revision:"047ce31e8b0ba3d8356401107632234c"},{url:"links/index.html",revision:"83490c3859bc63716da586e55e75340e"},{url:"Music/index.html",revision:"d2e063d619e23c80d18ff35d5f75c06b"},{url:"Photos/index.html",revision:"6d1e88c19b31da14a94086b526d5d7d7"},{url:"posts/4a17b156.html",revision:"9e92bd8e33e21e886b073a03736f6706"},{url:"posts/83383c7b.html",revision:"a7fe702534a1d391b65ee9d9cae2b4e7"},{url:"tags/Fluid/index.html",revision:"54ac923680b6f8d109a91bcaaf2f1d62"},{url:"tags/Github-Page/index.html",revision:"8d3ae06420cef412cc0c2aed71c0b703"},{url:"tags/Hexo/index.html",revision:"a4e5d05c923df58c1e384b819781212e"},{url:"tags/index.html",revision:"54b85af0b67c19008d5c58ae1c465fb4"},{url:"Wallpapers/index.html",revision:"942dd86969068e78ffe4b4a8ae38860c"}],{})}));
//# sourceMappingURL=service-worker.js.map
