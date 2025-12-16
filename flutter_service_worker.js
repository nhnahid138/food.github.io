'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bcb0cc60f953a69e67647f4c36b41764",
"version.json": "67ec5478ab9cfdf9c5ff8dc3c8e6110c",
"index.html": "5ac2e2c3a2526aaf5b4e8ea0dcff9772",
"/": "5ac2e2c3a2526aaf5b4e8ea0dcff9772",
"main.dart.js": "c0c69b457585d0f4a4d0cbf9e6db312a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c3425f0def9cebfbb651e4250bc97cb5",
"assets/AssetManifest.json": "6bc439d9a738aa18b788a873a9ae0cab",
"assets/NOTICES": "d9040826913cb49d1b88fefa3f4e6f7a",
"assets/img/bkas.png": "8ebe21422e205f1e9b0d3f5237924a65",
"assets/img/codd.png": "ec4b13dc01d29a73c49799abfe05e87a",
"assets/img/wallet.png": "ca8fdbdbe04f00f95e5ff0cd91be0690",
"assets/img/i.png": "65597351774ee06fa50e991f80cd0090",
"assets/img/screen1.png": "acba407286fca03aeba2db538617d4ee",
"assets/img/visa.svg": "b24e45eaf057e5fd5c0d6905cb80fb0f",
"assets/img/screen2.png": "0f5b0b41c8e0ae43e7fc76d57b857921",
"assets/img/product.png": "8df6273d136e318b6c026258ff47da37",
"assets/img/screen3.png": "a8425d10d4bc929d4987b170c1d3f25e",
"assets/img/up.png": "81af82f414c53599b9b420e8ac3414e8",
"assets/img/ngd.png": "3fa2a8e424ac3a35d90ea20158d2b991",
"assets/img/salad4.png": "5e4cd664a8d951126fdaf2bd29616615",
"assets/img/user.jpg": "6d27ef6b374cdd92e4039c326af5dda1",
"assets/img/vsaa.png": "0c0c240f54932f12cc0b9265fbd8e04e",
"assets/img/salad2.png": "409142d3f8d69605497ac58e6a3403ea",
"assets/img/salad3.png": "cbbcb9ea11026245e6bc69a0192eba53",
"assets/img/ice-cream.png": "53b268f119622d5d5c9d40556bd3f4e7",
"assets/img/food.jpg": "1f49ec5f8589c99ed8c411d9fce752f2",
"assets/img/2222.jpg": "18e64ebc63b5bf019cd0b1ab2c3ca812",
"assets/img/logo.png": "d85d24eb88fa941b449e2b9590036b45",
"assets/img/nogo.png": "1d384e60006232ad1e9785d7c5a79346",
"assets/img/upae.png": "87f37b476d53332d588ef94a9e15238a",
"assets/img/333.jpg": "423384c4cf26c6ad7dfc7093855abaa8",
"assets/img/upa.png": "939f6c2f5356fa0aae357955af02de3f",
"assets/img/location.png": "ed9367492a65aac349939b41d6ad5940",
"assets/img/salad.png": "0fb9ea0ccfa2a33a91a60fce8aba6e82",
"assets/img/item.png": "f4e35eaad9b09a0875be1e04fe71af44",
"assets/img/product2.png": "9a1123a247f8707042782b0eaa885477",
"assets/img/pizza.png": "d0600cdbed0b428026b8c297e2f1abc4",
"assets/img/loc2.jpg": "076ccd10af8c9958da8fef1fbe1fc47f",
"assets/img/locd.png": "6f5f6b3e48b8cc8c75c140eb0b6797a2",
"assets/img/boy.jpg": "b2a6942e9163304d37788131a86b0767",
"assets/img/burger.png": "b2c4d7ae537d190c2d08c59a2c90f98e",
"assets/img/loc.png": "41be9e98104cfc6cd5b3a439700549bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e64de26bb226f2e9b2dfc0df192dd9e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "19eb6c8e1e993a7304117ffe2b22b2bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "405fc501490a54143edc1ecae8ee7d79",
"assets/fonts/MaterialIcons-Regular.otf": "7de8b3e6dca29f19b593acd95af01db7",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
