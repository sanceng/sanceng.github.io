if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>a(e,s),n={module:{uri:s},exports:c,require:f};i[s]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5e65866b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2b14511616b648b97286ebd9bb3209ad"},{url:"about/index.html",revision:"2ef319a8b8975893af09b6119716e5ba"},{url:"archives/2022/01/index.html",revision:"f63fb4b617c6fe6fbc477e5fb5570493"},{url:"archives/2022/02/index.html",revision:"fd3246b1fb0849b603a17d4e24d56e16"},{url:"archives/2022/index.html",revision:"e5d24880caffbe585da3985a096aa726"},{url:"archives/index.html",revision:"57e0ddb9c712d31f9988eae63c7433cd"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Article/index.html",revision:"d457378020e59178853e72f94d3843c6"},{url:"categories/Article/Tech/index.html",revision:"f246967161a8e10f1ee7c3d4e921bb97"},{url:"categories/index.html",revision:"26da8ff6ac3d458ce7468a4f26d39dfa"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"4bd88f0df3af285c1626e820b619dab1"},{url:"gallery/index.html",revision:"4343c8c5aa7f8c1424eb8d6965fa2b94"},{url:"img/144x144.jpg",revision:"f04b46eacc74ef76e1115b516179987f"},{url:"img/about_ex.jpg",revision:"3044e4b10243c3d4a6f3beab2fec2d0a"},{url:"img/about.jpg",revision:"ea54a19146faae96f34fb1a268d1cdae"},{url:"img/about.png",revision:"ea54a19146faae96f34fb1a268d1cdae"},{url:"img/android-chrome-192x192.png",revision:"dce791a534c17337212cb915c51942c5"},{url:"img/android-chrome-512x512.png",revision:"5620d6b7d7ec48f64a3e067a805c589b"},{url:"img/apple-touch-icon.png",revision:"7faf19465170492d1e28c98924555894"},{url:"img/avatar.jpg",revision:"023b079c80ef5e2755d683830f7127ba"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/banner_ex.jpg",revision:"ab8be6e38a201a403fe3989a5660438c"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon-16x16.png",revision:"71e6ec5a3561bd8d210fde44c85afecf"},{url:"img/favicon-32x32.png",revision:"55a35ef10889525b7a6925ca94eac55d"},{url:"img/favicon.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/post_ex.jpg",revision:"36aa3f4b682c0260ea96a53ef2a50177"},{url:"index.html",revision:"1ee6075da885cab1956647f2e8bfa456"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"ba103a155fac3f6127ee25ef9d86151d"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"b5de1347007ba7c81fc9928edf4fbe3b"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"af5299d7b1b3be6149ac30c9208e2323"},{url:"js/utils.js",revision:"047ce31e8b0ba3d8356401107632234c"},{url:"links/index.html",revision:"7587abf22ad096853776d83f89de4cb2"},{url:"Music/index.html",revision:"c4de5b3c9987f7dbcdf44e845ca2a2c9"},{url:"Photos/index.html",revision:"bb961024f080c85df3a98e2ee775bb58"},{url:"posts/29d1bd2d.html",revision:"31654f261f6bc00bf4ded8a5da09d67c"},{url:"posts/4a17b156.html",revision:"aea28b7038794a6f127fd5548229ebd4"},{url:"posts/83383c7b.html",revision:"0c10aa000a01144fa3df5671d171cd66"},{url:"posts/c32a948c.html",revision:"94130ad181976977fa9418d8cbbf0130"},{url:"tags/Fluid/index.html",revision:"93abbc4a56da9989d53a5c10640abd19"},{url:"tags/Github-Page/index.html",revision:"511cc7709f0369a3d89fc70be6e40619"},{url:"tags/Hexo/index.html",revision:"e4cf79842df4a782daf5fb3cf977bed9"},{url:"tags/index.html",revision:"9e608aa34e8889588bec91dbca0bd4ce"},{url:"tags/PyTorch/index.html",revision:"c1e7dfa3b31ddabe95dbdcad1f6d5d2f"},{url:"tags/机器学习/index.html",revision:"e04a1240fe15eefa45cdf4ed7a9fcd19"},{url:"tags/金融/index.html",revision:"8567fc0002752e5bf51d394c2548836d"},{url:"Wallpapers/index.html",revision:"fffca1eb1268793f9cbba31dfabe6705"}],{})}));
//# sourceMappingURL=service-worker.js.map
