if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const f=e=>a(e,c),n={module:{uri:c},exports:d,require:f};i[c]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(s(...e),d)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2b14511616b648b97286ebd9bb3209ad"},{url:"about/index.html",revision:"a00a6c4dc4c0268b139bbcbe1e5832e0"},{url:"archives/2022/01/index.html",revision:"ee331ab38d546488c5be7ce6e11c14f3"},{url:"archives/2022/02/index.html",revision:"e9b810e06a56270d76d59245d30933c4"},{url:"archives/2022/03/index.html",revision:"77f8eaf76f3ea59a4b085df9ad64d33a"},{url:"archives/2022/index.html",revision:"1da2dfa0c184aff1e234fcffacb0bc26"},{url:"archives/index.html",revision:"613958e24d0f9565467508296b16453f"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Article/index.html",revision:"c357427da864537359b06806916372c4"},{url:"categories/Article/Tech/Assignments/index.html",revision:"4b9fa72db8f6886eeb9b97a9d5305c28"},{url:"categories/Article/Tech/Class-Note/index.html",revision:"b236c19435cd4a6f05f5705d30be38f6"},{url:"categories/Article/Tech/index.html",revision:"657763e8e684c0faf7c5a3f3cc25325a"},{url:"categories/index.html",revision:"5de63b68e9db94a2b45ee1ba039f115b"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"4bd88f0df3af285c1626e820b619dab1"},{url:"gallery/index.html",revision:"4343c8c5aa7f8c1424eb8d6965fa2b94"},{url:"img/144x144.jpg",revision:"f04b46eacc74ef76e1115b516179987f"},{url:"img/about_ex.jpg",revision:"3044e4b10243c3d4a6f3beab2fec2d0a"},{url:"img/about.jpg",revision:"ea54a19146faae96f34fb1a268d1cdae"},{url:"img/about.png",revision:"ea54a19146faae96f34fb1a268d1cdae"},{url:"img/android-chrome-192x192.png",revision:"dce791a534c17337212cb915c51942c5"},{url:"img/android-chrome-512x512.png",revision:"5620d6b7d7ec48f64a3e067a805c589b"},{url:"img/apple-touch-icon.png",revision:"7faf19465170492d1e28c98924555894"},{url:"img/avatar.jpg",revision:"023b079c80ef5e2755d683830f7127ba"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/banner_ex.jpg",revision:"ab8be6e38a201a403fe3989a5660438c"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon-16x16.png",revision:"71e6ec5a3561bd8d210fde44c85afecf"},{url:"img/favicon-32x32.png",revision:"55a35ef10889525b7a6925ca94eac55d"},{url:"img/favicon.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/post_ex.jpg",revision:"36aa3f4b682c0260ea96a53ef2a50177"},{url:"index.html",revision:"1cfe7031f0408f289155e0d5350be739"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"ba103a155fac3f6127ee25ef9d86151d"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"b5de1347007ba7c81fc9928edf4fbe3b"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"af5299d7b1b3be6149ac30c9208e2323"},{url:"js/utils.js",revision:"047ce31e8b0ba3d8356401107632234c"},{url:"links/index.html",revision:"7587abf22ad096853776d83f89de4cb2"},{url:"Music/index.html",revision:"7c3950128e58bb9782dcd796e1311186"},{url:"Photos/index.html",revision:"bb961024f080c85df3a98e2ee775bb58"},{url:"posts/1baee30d.html",revision:"f6a8a47d6ee8d1b0c995babf08aa6809"},{url:"posts/29a2346f.html",revision:"d550af2c236b12a9b7f3306e2a143aef"},{url:"posts/29d1bd2d.html",revision:"f2d09755346b2c687af886cab9393333"},{url:"posts/4a17b156.html",revision:"a7de0b4c0caabb89f3896251aa5062b5"},{url:"posts/83383c7b.html",revision:"a79699d677aa956e56322de739a99933"},{url:"posts/c32a948c.html",revision:"fa8bcfd359d54daa798530a6e3d0f333"},{url:"tags/Fluid/index.html",revision:"93abbc4a56da9989d53a5c10640abd19"},{url:"tags/Github-Page/index.html",revision:"511cc7709f0369a3d89fc70be6e40619"},{url:"tags/Hexo/index.html",revision:"e4cf79842df4a782daf5fb3cf977bed9"},{url:"tags/index.html",revision:"472881d10089f1befba67b11578e246f"},{url:"tags/PyTorch/index.html",revision:"c1e7dfa3b31ddabe95dbdcad1f6d5d2f"},{url:"tags/机器学习/index.html",revision:"7e97d9bca60e66bada2cc055cbb82ea5"},{url:"tags/金融/index.html",revision:"019397c7b4706a80fb5f8f681efeb162"},{url:"Wallpapers/index.html",revision:"fffca1eb1268793f9cbba31dfabe6705"}],{})}));
//# sourceMappingURL=service-worker.js.map
